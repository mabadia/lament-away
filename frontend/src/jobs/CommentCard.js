
function CommentCard({ comment, onDelete }) {
    return (
        <div>
        <h2>
          {comment.rant ? 'Thumbs Down! 👎' : 'Thumbs Up! 👍'}
        </h2>
        <h4>{comment.content}</h4>
        <h3>
          <strong>
            - {comment.author.screenName} 
          </strong>
        </h3>
        <h4>Rating: {comment.stars}</h4>
        <button  onClick={onDelete}>
          Delete Comment
        </button>
        </div>
    )
}

export default CommentCard;