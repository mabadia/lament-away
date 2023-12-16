import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CommentCard from './CommentCard'; // Import CommentCard component
import NewCommentForm from './NewCommentForm'; // Import NewCommentForm component

function BusinessDetails() {
  const { jobsId } = useParams();
  const history = useHistory();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${jobsId}`);
        const jobData = await response.json();
        setJob(jobData);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchData();
  }, [jobsId]);

  if (job === null) {
    return <h1>Loading</h1>;
  }

  const editPlace = () => {
    history.push(`/jobs/${job.jobsId}/edit`);
  };

  const deletePlace = async () => {
    try {
      await fetch(`http://localhost:3000/jobs/${job.jobsId}`, {
        method: 'DELETE',
      });
      history.push('/jobs');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const deleteComment = async (deletedComment) => {
    try {
      await fetch(`http://localhost:3000/jobs/${job.jobsId}/comments/${deletedComment.commentId}`, {
        method: 'DELETE',
      });

      setJob((prevJob) => ({
        ...prevJob,
        reviews: prevJob.reviews.filter((comment) => comment.commentId !== deletedComment.commentId),
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const createComment = async (commentAttributes) => {
    try {
      const response = await fetch(`http://localhost:3000/jobs/${job.jobsId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentAttributes),
      });

      const comment = await response.json();

      setJob((prevJob) => ({
        ...prevJob,
        reviews: [...prevJob.reviews, comment],
      }));
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  let reviews = (
    <h3 className="inactive">
      No user reviews yet!
    </h3>
  );
  let rating = (
    <h3 className="inactive">
      This job location has not yet been rated
    </h3>
  );
  let comments = [];

  if (job.reviews.length) {
    const sumRatings = job.reviews.reduce((total, c) => total + c.stars, 0);
    const averageRating = Math.round(sumRatings / job.reviews.length);
    let stars = '';

    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️';
    }

    rating = (
      <h3>
        {stars} stars
      </h3>
    );

    comments = job.reviews.map((comment) => (
      <CommentCard key={comment.commentId} comment={comment} onDelete={() => deleteComment(comment)} />
    ));
  }

  return (
    <main>
      {/* ... (your existing JSX) ... */}
    </main>
  );
}

export default BusinessDetails;
