import React from 'react';
import { Nav, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ListGroup horizontal as="ul">
            <ListGroup.Item className="my-3 px-2 py-1 bg-dark border-0" as="li">
                <Nav.Item className="ml-1 text-light text-decoration-none" as={NavLink} to="/signup">Signup</Nav.Item>
            </ListGroup.Item>
            <ListGroup.Item className="my-3 px-2 py-1 bg-dark border-0" as="li">
                <Nav.Item className="ml-1 text-light text-decoration-none" as={NavLink} to="/signin">Login</Nav.Item>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default SignedOutLinks;