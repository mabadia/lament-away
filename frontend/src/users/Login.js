import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from "../contexts/CurrentUser";

const Login = () => {
    const history = useHistory();
    // Using the CurrentUser context to manage the current user state
    const { setCurrentUser } = useContext(CurrentUser)

    // State for storing login credentials and error message
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    //Error message state 
    const [errorMessage, setErrorMessage] = useState(null)
    // Async function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                // Assuming the backend returns a user object upon successful login
                const user = await response.json();

                // Redirect to home page after successful login
                history.push('/home');
            } else {
                // Handle failed response 
                console.error('Login failed');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error during login:', error.message);
        }
    };

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            id="email"
                            name="email"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            id="password"
                            name="password"
                            className="form-control"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default Login;