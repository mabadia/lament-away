import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/signUp")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
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
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Business
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Business
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;