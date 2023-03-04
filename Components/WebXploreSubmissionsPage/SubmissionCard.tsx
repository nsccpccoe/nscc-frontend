import classes from "./SubmissionCard.module.scss";
import Link from "next/link";
import { CustomError, WebXploreSubmissionResult } from "../interfaces/event.interface";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/router";

export function SubmissionCard(props: { submission: WebXploreSubmissionResult["data"], featured: boolean, liked: boolean }) {

  const [liked, setLike] = useState<number>(0);
  const router = useRouter();

  const handleUpvote = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    if(liked) return;

    if(Date.now() >= 1674973800000) {
      toast.error('Hackathon Ended!');
      return
    }

    if(Boolean(localStorage.getItem('accessToken')) === false) {
      toast.error('Please Login to Vote!')
      return
    }

    const submissionRequest = fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/webxplore/upvote', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ submissionID: props.submission.id })
    })
      .then(res => res.json() as Promise<WebXploreSubmissionResult | CustomError>)
      .then(res => {
        if(res.isError) throw new Error(res.errorMessage);
        setLike(1);
      })

    toast.promise(submissionRequest, {
      pending: `Voting ${props.submission.createdBy}`,
      error: `Failed to vote for ${props.submission.createdBy}`,
      success: `Successfully voted for ${props.submission.createdBy}`
    })
  }

  const handleCopyLink = () => {
    const copyPromise = navigator.clipboard.writeText(
      `${location.origin}${router.pathname}?submission_id=${props.submission.id}`
    )
    toast.promise(copyPromise, {
      pending: `Copying Link to ${props.submission.createdBy}'s Submission`,
      error: `Failed to copy Link to ${props.submission.createdBy}'s Submission`,
      success: `Successfully copied Link to ${props.submission.createdBy}'s Submission`
    })
  }

  const handleShare = () => {
    const copyPromise = navigator.share( {
      text: `Hey!\nCheck out my submission for NSCC's WebXplore Hackathon at ${location.origin}${router.pathname}?submission_id=${props.submission.id}`,
      title: `Checkout ${props.submission.createdBy}'s Submission in WebXplore Hackathon`,
    })
    toast.promise(copyPromise, {
      pending: `Opening Share Dialog`,
      error: `Failed to open Share Dialog!`,
      success: `Successfully Opened Share Dialog!`
    })
  }

  const likesCount = props.submission.likes + (props.liked ? 0 : liked);

  return (
    <div className={`${classes.submissionCard} ${props.featured ? classes.featured : ''}`}>
      <div>By {props.submission.createdBy}</div>
      <Link className={classes.link} href={props.submission.link} target="_blank">
        <img src={props.submission.screenshot} />
      </Link>
      <div>{props.submission.title}</div>
      <div>
        <div>Status: {props.submission.status}</div>
        <div>Judged By: {props.submission.judge}</div>
        <div title="Number of Upvotes By Verified Account">Valid Upvotes: {props.submission.validLikes}</div>
        <div title="Average Lighthouse Score">Lighthouse Score: {props.submission.lighthouse}</div>
        <div>Total Score: {props.submission.lighthouse + props.submission.validLikes}</div>
      </div>
      <div className={classes.actionButtons}>
        <button
          onClick={handleUpvote}
          className={(liked || props.liked) ? classes.highlight : ''}
          disabled={Boolean(liked) || props.liked}
          >
            Vote{(liked || props.liked) ? 'd' : ''} +{likesCount}
        </button>
        <button onClick={handleCopyLink}>Copy Link</button>
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  )
}