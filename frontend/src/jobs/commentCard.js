import React from "react";


function CommentCard({ comment, onDelete }) {
    return (
        <div className="border col-sm-4">
        <h2 className="reviews">
          {comment.reviews ? 'Thumbs Down! 👎' : 'Thumbs Up! 👍'}
        </h2>
        <h4>{comment.content}</h4>
        <h3>
          <strong>
            - {comment.author.screenName} 
          </strong>
        </h3>
        <h4>Rating: {comment.stars}</h4>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete Comment
        </button>
        </div>
    );
}

export default CommentCard;


// other possible code 
// const CommentCard = ({ comment, onDelete }) => (
//   <div >
//     <h2 >{comment ? 'Bad Reviews! 😡' : 'Good Reviews! 😻'}</h2>
//     <h4>{comment.content}</h4>
//     <h3><strong>- {comment.author.userName} </strong></h3>
//     <h4>Rating: {comment.stars}</h4>
//     <button  onClick={onDelete}>Delete Comment</button>
//   </div>
// );

// export default CommentCard;
