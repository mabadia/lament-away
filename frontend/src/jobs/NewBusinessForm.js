import { useState } from "react"
import { useHistory } from "react-router"

function NewBusinessForm() {

	const history = useHistory()

	// eventuallly want to add picture portion, where users can add pictures of establisments
	const [business, setBusiness] = useState({
		name: '',
		// pic: '',
		city: '',
		state: '',
		address: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()
		console.log('Hello world')
		await fetch(`http://localhost:3000/jobs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(business)
		})

		history.push('/jobs')
	}

	return (
		<main>
			<h1>Add a New Place of Employment</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Employer's Name</label>
					<input
						required
						value={business.name}
						onChange={e => setBusiness({ ...business, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Employment Address</label>
					<input
						required
						value={business.address}
						onChange={e => setBusiness({ ...business, address: e.target.value })}
						className="form-control"
						id="address"
						name="address"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={business.city}
						onChange={e => setBusiness({ ...business, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={business.state}
						onChange={e => setBusiness({ ...business, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Business" />
			</form>
		</main>
	)
}

export default NewBusinessForm