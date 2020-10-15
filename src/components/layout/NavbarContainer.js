import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const NavbarContainer = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Hotel Planer</Navbar.Brand>
                <SignedInLinks />
            </Container>
        </Navbar>
    )
}

export default NavbarContainer;