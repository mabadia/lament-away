import React, { useState } from 'react';
import './NewComment.css';

function NewComment({ onAddComment }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({
      content: newComment,
      author: { screenName: 'User2' },
      stars: 4,
    });
    setNewComment('');
  };

  return (
    <div>
      <h1>New Comment</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your comment here"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button type="submit"> Add a Comment </button>
      </form>
    </div>
  );
}

export default NewComment;
