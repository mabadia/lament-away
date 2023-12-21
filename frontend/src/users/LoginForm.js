import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function LoginForm() {

    const history = useHistory()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        user_email: '',
        user_password: '',
        username: ''
        
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        try {
            const response = await fetch(`http://localhost:3000/authentication/`, {
                method: 'POST',
                // credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            // test
            // console.log(data)
            if (response.status === 200) {
                setCurrentUser(data.user)
                localStorage.setItem('token', data.token);
                history.push(`/`);
                // test
                // console.log('hello')
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            // test 
            // console.error("An error occurred: ", error);
            setErrorMessage("An error occured, please try again");
        }
    }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.user_email}
                            onChange={e => setCredentials({ ...credentials, user_email: e.target.value })}
                            className="form-control"
                            id="user_email"
                            name="user_email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="user_password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.user_password}
                            onChange={e => setCredentials({ ...credentials, user_password: e.target.value })}
                            className="form-control"
                            id="user_password"
                            name="user_password"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">User Name</label>
                        <input
                            type="username"
                            required
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-control"
                            id="username"
                            name="username"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default LoginForm