import { useState } from "react"
import { useHistory } from "react-router"

function SignUpForm() {

	const history = useHistory()

	const [user, setUser] = useState({
		// firstName: '',
        // lastName: '',
		username: '',
		user_email: '',
		user_password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		history.push(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
			
				<div className="row">
			
					<div className="col-sm-12 form-group">
						<label htmlFor="username">Username</label>
						<input
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="user_email">Email</label>
						<input
							type="user_email"
							required
							value={user.user_email}
							onChange={e => setUser({ ...user,user_email: e.target.value })}
							className="form-control"
							id="user_mail"
							name="user_email"
						/>
					</div>
					<div className='col-sm-6 form-group'>
						<label htmlFor='user_password'>Password</label>
						<input type="password" required value={user.user_password} onChange={e => setUser({ ...user, user_password: e.target.value})}
						className='form-control'
						id='user_password'
						name='user_password'
						/>
					</div>
				</div>
				{/* form for first and last name */}
				{/* <div className="row">
			
			<div className="col-sm-6 form-group">
				<label htmlFor="firstName">First Name</label>
				<input
					required
					value={user.firstName}
					onChange={e => setUser({ ...user, firstName: e.target.value })}
					className="form-control"
					id="firstName"
					name="firstName"
				/>
			</div>

			<div className="col-sm-6 form-group">
				<label htmlFor="lastName">Last Name</label>
				<input
					required
					value={user.lastName}
					onChange={e => setUser({ ...user, lastName: e.target.value })}
					className="form-control"
					id="lastName"
					name="lastName"
				/>
			</div>
		</div> */}
				<input className="btn btn-primary" type="submit" value="Sign Up" />

				
			</form>
		</main>
	)
}

export default SignUpForm