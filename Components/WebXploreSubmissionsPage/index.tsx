import classes from "./index.module.scss";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CustomError, WebXploreLikedSubmissionsResult, WebXploreSubmissionResult, WebXploreSubmissionsResult } from "../interfaces/event.interface";
import { toast } from "react-toastify";
import { SubmissionCard } from "./SubmissionCard";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "@firebase/auth";

function WebXploreSubmissionsPage() {

  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null);
  const [featuredSubmissionID, setFeaturedSubmissionID] = useState<string>()
  const [userId, setUserId] = useState<string>()

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
        setUserId(user.uid)
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
    const input = inputRef.current;
    if (input === null) return;

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
    return submission.id === userId
  })[0];

  const otherSubmissions: WebXploreSubmissionResult["data"][] = submissions.data.filter(submission => {
    return !featuredSubmission || submission.id !== featuredSubmission.id
  });

  const mySubmission = submissions.data.filter((submission) => submission.id === userId)[0];

  return (
    <div className={classes.container}>
      <h1>WebXplore Hackathon Submissions</h1>
      {
        featuredSubmissionID && !featuredSubmission &&
        <div>Submission with id: <i>{featuredSubmissionID}</i> Not Found!</div>
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
            placeholder="https://example.com/" />
          <button type="submit" className={classes.submit} disabled={Boolean(mySubmission)}>Submit</button>
        </div>
      </form>
      {
        !submissions.loading && submissions.data.length === 0 &&
        <div style={{ textAlign: 'center' }}>No Submissions</div>
      }
      <div className={classes.allSubmissions}>
        {
          featuredSubmission &&
          <SubmissionCard submission={featuredSubmission} featured={true} liked={Boolean(likedByMe.submissions.find(id => id === featuredSubmission.id))} />
        }
        {
          submissions.loading
            ? <p>Loading Submissions...</p>
            : otherSubmissions.map(submission => 
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