import classes from "./index.module.scss";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CustomError, WebXploreLikedSubmissionsResult, WebXploreSubmissionResult, WebXploreSubmissionsResult } from "../interfaces/event.interface";
import { toast } from "react-toastify";
import { SubmissionCard } from "./SubmissionCard";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "@firebase/auth";
import Link from "next/link";
import { Rings } from "react-loader-spinner";

function shuffle<T = unknown>(array: T[]): T[] {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function WebXploreSubmissionsPage() {

  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null);
  const [featuredSubmissionID, setFeaturedSubmissionID] = useState<string>()
  const [userId, setUserId] = useState<{loading: boolean, value: string | undefined}>({
    loading: true,
    value: undefined
  })

  const [submissions, setSubmissions] = useState<{ loading: boolean, data: WebXploreSubmissionsResult["data"] }>({
    loading: true,
    data: []
  })

  const [likedByMe, setLikedByMe] = useState<{
    loading: boolean;
    submissions: string[];
  }>({
    loading: true,
    submissions: []
  })

  useEffect(() => {
    if (router.isReady) {
      const { submission_id } = router.query
      if (typeof submission_id === 'string') {
        setFeaturedSubmissionID(submission_id);
      }
    }
  }, [router.isReady])

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setUserId({ loading: false, value: user.uid})
        fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/webxplore/likedSubmissions', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          }
        })
          .then(res => res.json() as Promise<WebXploreLikedSubmissionsResult | CustomError>)
          .then(res => {
            if(res.isError === false) {
              setLikedByMe({ loading: false, submissions: res.data })
            }
            else {
              toast.error('Error While Fetching Liked Submissions List!')
            }
          })
          .catch(err => {
            setLikedByMe({ loading: false, submissions: [] })
            toast.error('Something Went Wrong!')
          })
      }
      else {
        setUserId({ loading: false, value: undefined})
      }
    })
  }, [])

  useEffect(() => {
    fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/webxplore/submissions')
      .then(res => res.json() as Promise<WebXploreSubmissionsResult>)
      .then(res => setSubmissions({ loading: false, data: res.data }))
      .catch(err => {
        setSubmissions({ loading: false, data: [] })
        toast.error('Failed to Load Hackathon Submissions')
      })
  }, [])

  const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if(Date.now() >= 1674973800000) {
      toast.error('Hackathon Ended!');
      return
    }

    const input = inputRef.current;
    if (input === null) return;
    if(Boolean(userId.value) === false) {
      toast.error('Login to Submit Your Website');
      return
    }

    if(input.value.includes("nsccpccoe.web.app")) {
      toast.error('Invalid Website');
      return
    }

    const submissionRequest = fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/webxplore/submit', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: input.value })
    })
      .then(res => res.json() as Promise<WebXploreSubmissionResult | CustomError>)
      .then(res => {
        if (res.isError) throw new Error(res.errorMessage);
        setSubmissions({
          loading: false,
          data: [res.data, ...submissions.data]
        })
      })

    toast.promise(submissionRequest, {
      pending: 'Submission under process',
      error: 'Submission Failed!',
      success: 'Submission Completed!'
    })
  }

  const featuredSubmission: WebXploreSubmissionResult["data"] | null | undefined = submissions.data.filter(submission => {
    return submission.id === featuredSubmissionID
  })[0] || submissions.data.filter(submission => {
    return submission.id === userId.value
  })[0];

  const otherSubmissions: WebXploreSubmissionResult["data"][] = submissions.data
    .filter(submission => {
      return !featuredSubmission || submission.id !== featuredSubmission.id
    })
    .sort((a, b) => (Number(b.validLikes) + Number(b.lighthouse))- (Number(a.validLikes) + Number(a.lighthouse)))

  // const otherSubmissions: WebXploreSubmissionResult["data"][] = shuffle<WebXploreSubmissionResult["data"]>(otherSubmissionsRaw);

  const mySubmission = submissions.data.filter((submission) => submission.id === userId.value)[0];

  return (
    <div className={classes.container}>
      <div>Submissions</div>
      <h1>WebXplore Hackathon</h1>
      {
        featuredSubmissionID && !submissions.loading && !featuredSubmission &&
        <div style={{color: 'red'}}>Submission with id: <i>{featuredSubmissionID}</i> Not Found!</div>
      }
      {!userId.loading && !Boolean(userId.value) &&
        <Link className={classes.loginPageLink} href="/auth?redirect=/events/webxplore/submissions">Login to Submit Your Website</Link>
      }
      <form className={classes.form} onSubmit={handleSubmission}>
        <label htmlFor="website-url">Enter Your Website URL {Boolean(mySubmission) ? '(Already Submitted)' : ''}</label>
        <div className={classes.inputArea}>
          <input
            ref={inputRef}
            type="url"
            id="website-url"
            className={classes.input}
            defaultValue={mySubmission ? mySubmission.link : ''}
            disabled={Boolean(mySubmission)}
            placeholder="https://example.com/"
            required
            title={!Boolean(userId.value) ? 'Login to Submit' : Boolean(mySubmission) ? 'Webiste Already Submitted' : 'Enter Link to your website'} />
          <button
            type="submit"
            className={classes.submit}
            disabled={Boolean(mySubmission)}
            title={!Boolean(userId.value) ? 'Login to Submit' : Boolean(mySubmission) ? 'Webiste Already Submitted' : 'Submit your Website'}>
            Submit
          </button>
        </div>
      </form>
      {
        !submissions.loading && submissions.data.length === 0 &&
        <div style={{ textAlign: 'center' }}>No Submissions</div>
      }
      {
        submissions.loading &&
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Rings
            height="80"
            width="80"
            color="#7a9ce0"
            radius="6"
            wrapperStyle={{ margin: "auto" }}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </div>
      }
      <div className={classes.allSubmissions}>
        {
          featuredSubmission &&
          <SubmissionCard submission={featuredSubmission} featured={true} liked={Boolean(likedByMe.submissions.find(id => id === featuredSubmission.id))} />
        }
        {
          !submissions.loading &&
          otherSubmissions.map(submission => 
              <SubmissionCard
                key={submission.id}
                submission={submission}
                liked={Boolean(likedByMe.submissions.find(id => id === submission.id))}
                featured={false} />
            )
        }
      </div>
    </div>
  );
}

export default WebXploreSubmissionsPage;