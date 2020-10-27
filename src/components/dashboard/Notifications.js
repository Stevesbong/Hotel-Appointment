import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Notifications = () => {
    return (
        <Container>
            <Card className="notifications border-0 my-3">
                <Card.Body className="text-secondary pb-2">
                    <Card.Title as="h4" className="text-dark">title</Card.Title>
                </Card.Body>
                <Card.Footer className="blockquote-footer py-0 card-footer border-0">
                    <p className="d-inline-block my-1 lead font-weight-normal">Posted by <cite title="Source Title">name</cite></p>
                    <p className="text-secondary lead">time</p>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Notifications;