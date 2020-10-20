import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const NavbarContainer = ({ auth }) => {

    // shows different component depend on user logged in or not
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <Navbar className="py-0 mb-3 mb-md-5" sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Hotel Planer</Navbar.Brand>
                { isLoaded(auth) && links }
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavbarContainer);