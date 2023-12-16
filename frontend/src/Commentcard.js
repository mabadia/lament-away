import React from "react";

const CommentCard = ({ comment, onDelete }) => (
  <div className="border col-sm-4">
    <h2 className="reviews">{comment.reviews ? 'Bad Reviews! 😡' : 'Good Reviews! 😻'}</h2>
    <h4>{comment.content}</h4>
    <h3><strong>- {comment.author.userName} </strong></h3>
    <h4>Rating: {comment.stars}</h4>
    <button className="btn btn-danger" onClick={onDelete}>Delete Comment</button>
  </div>
);

export default CommentCard;
