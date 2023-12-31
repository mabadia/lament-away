import { useState } from "react";
import { useHistory } from "react-router";

function NewBusinessForms() {

	const history = useHistory()

    // eventuallly want to add picture portion, where users can add pictures of establisments
	const [business, setBusiness] = useState({
		name: '',
		address: '',
		city: '',
		state: '',

	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/jobs`, {
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
					<label htmlFor="name">Employers Name</label>
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
					<label htmlFor="address">Employments Address</label>
					<input
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
				<input className="btn btn-primary" type="submit" value="Add Company" />
			</form>
		</main>
	)
}


export default NewBusinessForms