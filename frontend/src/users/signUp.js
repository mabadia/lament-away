import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const signUp = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
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
                />

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
                />

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
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    id="password"
                />

                <input
                    type="submit"
                    value="Sign Up"
                />

            </form>
        </main>
    )
}

export default signUp
