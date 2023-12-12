import React from "react"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"

function Navigation() {
    return (
        <>
        <Navbar>
            <Container>
                <Navbar.Brand id="logo" href="/">Lament-Away</Navbar.Brand>
                <Nav id="nav" classname="me-auto">
                    <Nav.Link id="Home" className="Link" href="/">Home</Nav.Link>
                    <Nav.Link id="Laments" className="Link" href="/laments">Laments</Nav.Link>
                    <Nav.Link id="About" className="Link" href="/about">About</Nav.Link>
                    <Nav.Link id="Contact" className="Link" href="/contact">Contact</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
        </>
    )
}
export default Navigation;