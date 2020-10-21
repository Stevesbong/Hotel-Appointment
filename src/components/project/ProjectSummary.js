import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectSummary = ({ project }) => {
    return (
        <Card className="project-summary border-0 my-3">
            <Card.Body className="text-secondary pb-2">
                <Card.Title as="h4" className="text-dark font-weight-bold">{project.title}</Card.Title>
            </Card.Body>
            <Card.Footer className="blockquote-footer py-0 card-footer border-0">
                <p className="d-inline-block my-1 lead font-weight-normal">Posted by <cite title="Source Title">{project.authorFirstName} {project.authorLastName}</cite></p>
                <p className="text-secondary lead">14th October, 11pm</p>
            </Card.Footer>
        </Card>
    )
}

export default ProjectSummary;