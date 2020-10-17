import React from 'react';
import { Nav, ListGroup, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ListGroup horizontal as="ul">
            <ListGroup.Item className="my-auto px-2 py-1 bg-dark border-0" as="li">
                <Nav.Item className="ml-1 text-light text-decoration-none" as={NavLink} to="/create">New Project</Nav.Item>
            </ListGroup.Item>
            <ListGroup.Item className="my-auto px-2 py-1 bg-dark border-0" as="li">
                <Nav.Item className="ml-1 text-light text-decoration-none" as={NavLink} to="/">Log Out</Nav.Item>
            </ListGroup.Item>
            <ListGroup.Item className="my-auto px-2 py-1 bg-dark border-0" as="li">
                <Nav.Item className="ml-1" as={NavLink} to="/"><h3 className="d-inline-block"><Badge pill variant="success">NN</Badge></h3></Nav.Item>
            </ListGroup.Item>            
        </ListGroup>
    )
}

export default SignedInLinks;