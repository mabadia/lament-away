import React, { useState } from "react";
import Home from "./Home";
import CommentCard from "./jobs/CommentCard";
import NewComment from "./NewComment";




function FYP()
{
  const [comments, setComments] = useState([
    { id: 1, content: "This is a comment", author: { screenName: "User1" }, stars: 5 },
  ]);

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, { ...newComment, id: comments.length + 1 }]);
  };




  return (
    <div>
      <h1>For You Page</h1>
      <Home />
      
    <div className="fyp-feed">  

      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} onDelete={handleDeleteComment} />
      ))}
      <NewComment onAddComment={handleAddComment} />

          </div>

    </div>
  );
}

export default FYP;