import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import { useContext } from 'react';
import CommentCard from '/CommentCard'
import NewCommentForm from "./NewCommentForm";
import { CurrentUser } from '../contexts/CurrentUser';

function BusinessDetails() {

	const { businessId } = useParams()

	const history = useHistory()

	const [business, setBusiness] = useState(null)

	const { currentUser } = useContext(CurrentUser)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/jobs/${businessId}`)
			const resData = await response.json()
			setBusiness(resData)
		}
		fetchData()
	}, [businessId])

	if (business === null) {
		return <h1>Loading</h1>
	}

	function editBusiness() {
		history.push(`/jobs/${business.businessId}/edit`)
	}

	async function deleteBusiness() {
		await fetch(`http://localhost:3000/jobs/${business.businessId}`, {
			method: 'DELETE'
		})
		history.push('/jobs')
	}

	async function deleteComment(deletedComment) {
		await fetch(`http://localhost:3000/jobs/${business.businessId}/comments/${deletedComment.commentId}`, {
			method: 'DELETE'
		})

		setBusiness({
			...business,
			comments: business.comments
				.filter(comment => comment.commentId !== deletedComment.commentId)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`http://localhost:3000/jobs/${business.businessId}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setBusiness({
			...business,
			comments: [
				...business.comments,
				comment
			]
		})

	}



	let comments = (
		<h3 className="inactive">
			No comments yet!
		</h3>
	)
	let rating = (
		<h3 className="inactive">
			Not yet rated
		</h3>
	)
	if (business.comments.length) {
		let sumRatings = business.comments.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / business.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = business.comments.map(comment => {
			return (
				<CommentCard key={comment.commentId} comment={comment} onDelete={() => deleteComment(comment)} />
			)
		})
	}


	let businessActions = null

	if (currentUser?.role === 'admin') {
		businessActions = (
			<>
				<a className="btn btn-warning" onClick={editBusiness}>
					Edit
				</a>
				<button type="submit" className="btn btn-danger" onClick={deleteBusiness}>
					Delete
				</button>
			</>
		)
	}

	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					{/* <img style={{ maxWidth: 200 }} src={business.pic} alt={business.name} /> */}
					<h3>
						Located in {business.city}, {business.state}
					</h3>
				</div>
				<div className="col-sm-6">
					<h1>{business.name}</h1>
					<h2>
						Rating
					</h2>
					{rating}
					<br />
					<h2>
						Description
					</h2>
					<h3>
						{business.name} has been serving {business.city}, {business.state} since {business.founded}.
					</h3>
					<br />
					<a className="btn btn-warning" onClick={editBusiness}>
						Edit
					</a>{` `}
					<button type="submit" className="btn btn-danger" onClick={deleteBusiness}>
						Delete
					</button>
				</div>
			</div>
			<hr />
			<h2>Comments</h2>
			<div className="row">
				{comments}
			</div>
			<hr />
			<h2>Got Your Own Rant or Rave?</h2>
			<NewCommentForm
				business={business}
				onSubmit={createComment}
			/>
		</main>
	)
}

export default BusinessDetails