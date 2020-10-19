import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavbarContainer = () => {
    return (
        <Navbar className="py-0 mb-3 mb-md-5" sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Hotel Planer</Navbar.Brand>

                {/* shows different component depend on user logged in or not */}
                <SignedInLinks />
                <SignedOutLinks />
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(NavbarContainer);