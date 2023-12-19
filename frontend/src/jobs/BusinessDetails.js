import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import commentCard from './commentCard';
import NewBusinessForm from './NewBusinessForms';

function BusinessDetails() {
  const { jobsId } = useParams();
  const history = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${jobsId}`)
      .then(r => r.json())
      .then(data => setJob(data))
      .catch(error => console.error('Error finding job:', error));
  }, [jobsId]);

  if (!job) {
    return <h1>Loading...</h1>;
  }

  const editPlace = () => {
    history(`/jobs/${job.jobId}/edit`);
  };


  const deletePlace = async () => {
    await fetch(`http://localhost:3000/jobs/${job.jobId}`, {
      method: 'DELETE'
    });
    history('/jobs');
  };

  const deleteComment = async (deletedComment) => {
    await fetch(`http://localhost:3000/jobs/${job.jobId}/comments/${deletedComment.commentId}`, {
      method: 'DELETE'
    });

    setJob({
      ...job,
      comments: job.comments.filter(comment => comment.commentId !== deletedComment.commentId)
    });
  };

  const createComment = async (commentAttributes) => {
    // r is for response waiting for the fetch to get a response 
    const r = await fetch(`http://localhost:3000/jobs/${job.jobId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentAttributes)
    });

    const comment = await r.json();

    setJob({
      ...job,
      comments: [
        ...job.comments,
        comment
      ]
    });
  };

  const sumThumbsUp = job.reviews.reduce((total, c) => total + (c.thumbUp ? 1 : 0), 0);
  const sumThumbsDown = job.reviews.reduce((total, c) => total + (c.thumbDown ? 1 : 0), 0);
  const totalReviews = job.reviews.length;

  const thumbsUpPercentage = totalReviews > 0 ? Math.round((sumThumbsUp / totalReviews) * 100) : 0;
  const thumbsDownPercentage = totalReviews > 0 ? Math.round((sumThumbsDown / totalReviews) * 100) : 0;

  const reviews = job.reviews.length ? job.reviews.map(c => (
    <CommentCard key={c.commentId} comment={c} onDelete={() => deleteComment(c)} />
  )) : <h3 className="inactive">No user reviews yet!</h3>;

  const rating = job.reviews.length ? (
    <div>
      <h3>{thumbsUpPercentage}% Thumbs Up</h3>
      <h3>{thumbsDownPercentage}% Thumbs Down</h3>
    </div>
  ) : <h3 className="inactive">This job location has not yet been rated</h3>;

  return (
    <main>
      <div className="row">
        <div className="col-sm-6">
          {/* <img style={{ maxWidth: 200 }} src={job.pic} alt={job.name} /> */}
          <h3>Located in {job.city}, {job.state}</h3>
        </div>
        <div className="col-sm-6">
          <h1>{job.name}</h1>
          <h2>Rating</h2>
          {rating}
          <br />
          <h2>Description</h2>
          <h3>{job.name} This store location has been located here {job.city}, {job.state} managed by {job.manager}.</h3>
          <a className="btn btn-warning" onClick={editPlace}>Edit</a>{' '}
          <button type="submit" className="btn btn-danger" onClick={deletePlace}>Delete</button>
        </div>
      </div>
      <hr />
      <h2>Comments</h2>
      <div className="row">{reviews}</div>
      <hr />
      <h2>Leave your review of this stores location?</h2>
      <NewCommentForm place={job} onSubmit={createComment} />
    </main>
  );
}

export default BusinessDetails;
