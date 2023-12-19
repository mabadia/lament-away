import { useState } from "react";
import { useNavigate } from "react-router";

function NewBusinessForms() {

	const history = useNavigate()

    // eventually want to add picture portion, where users can add pictures of establisments
	const [jobs, setJobs] = useState({
		name: '',
		address: '',
		city: '',
		state: '',
		manager: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/jobs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(jobs)
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
						value={jobs.name}
						onChange={e => setJobs({ ...jobs, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Employments Address</label>
					<input
						value={jobs.address}
						onChange={e => setJobs({ ...jobs, address: e.target.value })}
						className="form-control"
						id="address"
						name="address"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Manager's Name</label>
					<input
						value={jobs.manager}
						onChange={e => setJobs({ ...jobs, manager: e.target.value })}
						className="form-control"
						id="manager"
						name="manager"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={jobs.city}
						onChange={e => setJobs({ ...jobs, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={jobs.state}
						onChange={e => setJobs({ ...jobs, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
			</form>
		</main>
	)
}


export default NewBusinessForms