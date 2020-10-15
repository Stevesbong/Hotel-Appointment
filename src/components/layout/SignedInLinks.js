import React from 'react';
import { Nav, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ListGroup horizontal as="ul" className="m-1 ml-auto" variant="flush">
            <ListGroup.Item as="li" className="my-auto p-2"><Nav.Item className="ml-1" as={Link} to="/">New Project</Nav.Item></ListGroup.Item>
            <ListGroup.Item as="li" className="my-auto p-2"><Nav.Item className="ml-1" as={Link} to="/">Log Out</Nav.Item></ListGroup.Item>
            <ListGroup.Item as="li" className="my-auto p-2"><Nav.Item className="ml-1" as={Link} to="/"><h3 style={{ display: "inline-block"}}><Badge pill variant="primary">NN</Badge></h3></Nav.Item></ListGroup.Item>            
        </ListGroup>
    )
}

export default SignedInLinks;