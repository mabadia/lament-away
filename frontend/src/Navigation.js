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
                    <Nav.Link id="Lament" className="Link" href="/lament">Write a Lament</Nav.Link>
                    <Nav.Link id="About" className="Link" href="/about">About</Nav.Link>
                    <Nav.Link id="Contact" className="Link" href="/contact">Contact</Nav.Link>
                    <Button variant="secondary" href="/login">Log In</Button>

                       </Nav>

            </Container>
        </Navbar>
        </>
    )
}
export default Navigation;



