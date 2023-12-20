
function CommentCard({ comment, onDelete }) {
    return (
        <div>
            <h2>
                {/* was your experience a good or bad one  */}
                {comment.rant ? 'Thumbs Down! 👎' : 'Thumbs Up! 👍'}
            </h2>
            {/* Comments made by users */}
            <h4>{comment.content}</h4>
            <h3>
                {/* Who made the comment via screen Name */}
                <strong>
                    - {comment.author.screenName}
                </strong>
            </h3>
            <h4>Rating: {comment.stars}</h4>
            {/* Option for deleting comment by user */}
            <button onClick={onDelete}>
                Delete Comment
            </button>
        </div>
    )
}

export default CommentCard;