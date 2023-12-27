import { useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li>
                <a href="#" onClick={() => history.push("/signUp")}>
                <button id="signUp">Sign Up</button>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => history.push("/login")}>
                    <button id="login">Login</button>
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.username} 
            </li>
        )
    }

    let addPlaceButton = null
    if(currentUser?.role === 'admin'){
        addPlaceButton = (
           <nav>
            <ul>
                {addPlaceButton}
            </ul>
           </nav>
        )
    }

    return (
        <nav className='nav' >
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/jobs/new")}>
                        Add Business
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/jobs")}>
                        Reviews
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/contact")}>
                        Contact
                    </a>
                </li>
                {/* <h1>Lament Away</h1>  */}
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;