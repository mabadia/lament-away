import React from 'react';
import Home from './Home';
import CommentCard from './jobs/commentCard';

function FYP() {
  // You can fetch comments or other data here
  const comments = [
    { id: 1, content: 'This is a comment', author: { screenName: 'User1' }, stars: 5 },

  ];

  const handleDeleteComment = (commentId) => {
    console.log(`Delete comment with ID: ${commentId}`);
   
  };
  return (
    <div>
      <h1>For You Page</h1>
      {                     }
      <Home />
      {             }
      {comments.map(comment => (
        <CommentCard key={comment.id} comment={comment} onDelete={() => handleDeleteComment(comment.id)} />
      ))}
      {               }
    </div>
  );
}

export default FYP;
