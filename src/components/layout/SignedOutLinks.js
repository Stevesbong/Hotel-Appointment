import React from 'react';
import { Nav, ListGroup, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ListGroup horizontal as="ul">
            <ListGroup.Item as="li" className="my-auto px-2 py-1 bg-dark">
                <Nav.Item className="ml-1 text-light text-decoration-none" as={NavLink} to="/">Signup</Nav.Item>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="my-auto px-2 py-1 bg-dark">
                <Nav.Item className="ml-1 text-light text-decoration-none" as={NavLink} to="/">Login</Nav.Item>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default SignedOutLinks;