import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CommentCard from './CommentCard';
import NewCommentForm from './NewCommentForm';

//The component uses the useState and useEffect hooks to manage the state of the job and fetch job details when the component mounts.
function BusinessDetails() {
  const { jobsId } = useParams(), history = useHistory();
  const [job, setJob] = useState(null);

  useEffect(() => { fetch(`http://localhost:3000/jobs/${jobsId}`).then(r => r.json()).then(data => setJob(data)); }, [jobsId]);
//There are functions for editing, deleting the job, deleting a comment, and creating a new comment.
  if (!job) return <h1>Loading</h1>;

  const editPlace = () => history.push(`/jobs/${job.jobsId}/edit`);
  const deletePlace = async () => { await fetch(`http://localhost:3000/jobs/${job.jobsId}`, { method: 'DELETE' }); history.push('/jobs'); };
  const deleteComment = async (c) => { await fetch(`http://localhost:3000/jobs/${job.jobsId}/comments/${c.commentId}`, { method: 'DELETE' }); setJob(p => ({ ...p, reviews: p.reviews.filter(cm => cm.commentId !== c.commentId) })); };
  const createComment = async (cAttrs) => { const r = await fetch(`http://localhost:3000/jobs/${job.jobsId}/comments`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cAttrs) }); const comment = await r.json(); setJob(p => ({ ...p, reviews: [...p.reviews, comment] })); };

  //It calculates the average rating based on the comments associated with the job and represents it with stars.
  const sumRatings = job.reviews.reduce((tot, c) => tot + c.stars, 0);
  const averageRating = Math.round(sumRatings / job.reviews.length);
  const stars = '⭐️'.repeat(averageRating);

  const reviews = job.reviews.length ? job.reviews.map(c => <CommentCard key={c.commentId} comment={c} onDelete={() => deleteComment(c)} />) : <h3 className="inactive">No user reviews yet!</h3>;
  const rating = job.reviews.length ? <h3>{stars} stars</h3> : <h3 className="inactive">This job location has not yet been rated</h3>;

  return (
    <main>
      <div className="row">
        <div className="col-sm-6">
          <img style={{ maxWidth: 200 }} src={job.pic} alt={job.name} />
          <h3>Located in {job.city}, {job.state}</h3>
        </div>
        <div className="col-sm-6">
          <h1>{job.name}</h1>
          <h2>Rating</h2>
          {rating}
          <br />
          <h2>Description</h2>
          <h3>{job.name} This store location has been located here {job.city}, {job.state} since {job.founded}.</h3>
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
