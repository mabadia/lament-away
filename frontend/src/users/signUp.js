import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        screenName: '',
    });

    const handleChange = (e) => {
        setUser({ ...user, password: e.target.value });
    };

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
                history(`/`);
            } else {
                //Handle non-successful response 
                const errorData = await response.json();
                console.error('Signup failed:', errorData.message);
            }
        } catch (error) {
            //Handle network errors or other exceptions
            console.error('Error during signup:', error.message);
        }
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                {                    }

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

                {                                    }

                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        </main>
    );
};

export default SignUp;





//changes made and why ---

// 'handleChange' function is not defined
//   <input
   // type="password"
    //name="password"
  //  value={user.password}
  //  onChange={handleChange}
  //  required
   // id="password"
  //  className="form-control"
//      />


// 'handleChange' function is defined within the component
   // const SignUp = () => {
  // ...
        //  const handleChange = (e) => {
       //  setUser({ ...user, password: e.target.value });
  //  };
  // ...
  //<input
    //  type="password"
    //  name="password"
     // value={user.password}
    //  onChange={handleChange}
    //  required
    //  id="password"
     // className="form-control"
 // />
  // ...
   //     };
