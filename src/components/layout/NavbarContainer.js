import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'

const NavbarContainer = () => {
    return (
        <Navbar className="py-0" sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Hotel Planer</Navbar.Brand>

                {/* shows different component depend on user logged in or not */}
                <SignedInLinks />
                <SignedOutLinks />
            </Container>
        </Navbar>
    )
}

export default NavbarContainer;