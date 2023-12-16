import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const signUp = () => {

    const history = useNavigate();

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        screenName: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();

        const userToSend = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            screenName: user.screenName,
        };

        try {
            const response = await fetch(`http://localhost:3000/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userToSend),
            });

            if (response.ok) {
                const userData = await response.json();
                history.push(`/`);
            } else {
                // Handle non-successful response (server error)
                const errorData = await response.json();
                console.error('Signup failed:', errorData.message);
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error during signup:', error.message);
        }
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={(e) =>
                                setUser({ ...user, firstName: e.target.value })
                            }
                            id="firstName"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })
                            }
                            id="lastName"
                            required
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })
                            }
                            required
                            id="email"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                            id="password"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="screenName">Screen Name</label>
                        <input
                            required
                            value={user.screenName}
                            onChange={(e) => setUser({ ...user, screenName: e.target.value })}
                            id="screenName"
                            name="screenName"
                            className="form-control"
                        />
                    </div>
                </div>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                />

            </form>
        </main>
    )
}


export default signUp