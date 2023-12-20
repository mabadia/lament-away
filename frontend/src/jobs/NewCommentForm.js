import { useState, useEffect } from "react"
import { useHistory } from "react-router"

function NewCommentForm({ business, onSubmit }) {

    const [authors, setAuthors] = useState([])

    const [comment, setComment] = useState({
        content: '',
        review: '👎',
        lament: false,
        authorId: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/users`)
            const users = await response.json()
            setComment({ ...comment, authorId: users[0]?.username })
            setAuthors(users)
        }
        fetchData()
    }, [])

    let authorOptions = authors.map(author => {
        return <option key={author.username} value={author.username}>{author.userName}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(comment)
        setComment({
            content: '',
            review: '👎',
            lament: false,
            authorId: authors[0]?.username
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Content</label>
                    <textarea
                        required
                        value={comment.content}
                        onChange={e => setComment({ ...comment, content: e.target.value })}
                        className="form-control"
                        id="content"
                        name="content"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label htmlFor="state">Author</label>
                    <select
                        className="form-control"
                        value={comment.authorId}
                        onChange={e => setComment({ ...comment, authorId: e.target.value })}
                    >
                        {authorOptions}
                    </select>
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="review">Review</label>
                    <select
                        className="form-control"
                        value={comment.review}
                        onChange={e => setComment({ ...comment, review: e.target.value })}
                    >
                        <option value="👍">👍 Thumbs Up</option>
                        <option value="👎">👎 Thumbs Down</option>
                    </select>
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="lament">Lament</label>
                    <input
                        checked={comment.lament}
                        onChange={e => setComment({ ...comment, lament: e.target.checked })}
                        type="checkbox"
                        id="lament"
                        name="lament"
                        className="form-control"
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
        </form>
    )
}

export default NewCommentForm