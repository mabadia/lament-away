import React from "react"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import "./Navigation.css";

function Navigation() {
    return (
        <>
        <Navbar>
            <Container>
                <Navbar.Brand id="logo" href="/">         </Navbar.Brand>

                            <Nav id="nav" className="me-auto">


                    <Nav.Link id="Home" className="Link" href="/">Home</Nav.Link>
                                    {/*homepage */}
                    <Nav.Link id="NewComment" className="Link" href="/new-comment">  Write A Lament </Nav.Link>
                                    {/* New Comments Page */}
                    <Nav.Link id="About" className="Link" href="/about">About</Nav.Link>
                                    {/* ABOUT page (Info) */}
                    <Button variant="secondary" href="/login">Log In</Button>
                                    {/* Log In for our users */}

                            </Nav>

            </Container>
        </Navbar>
        </>
    )
}
export default Navigation;



