import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ProjectDetails = ({ match }) => {
    // route parameter of ID
    const id = match.params.id;
    return (
        <Container className="project-details my-5">
            <Card className=" border-0">
                <Card.Body>
                    <Card.Title as="h1" className="text-dark">Project title {id}</Card.Title>
                    <p className="blockquote pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Card.Body>
                <Card.Footer className="blockquote-footer py-3 card-footer">
                    <p className="d-inline-block my-1 lead">Posted by <cite title="Source Title">Steve</cite></p>
                    <p className="text-secondary lead">14th October, 11pm</p>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ProjectDetails;