import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectSummary = () => {
    return (
        <Card className="project-summary border-0 my-1">
            <Card.Body className="text-secondary">
                <Card.Title as="h4" className="text-dark font-weight-bold">Project Title</Card.Title>
                <p>Posted by the Steve</p>
                <p className="text-secondary">14th October, 11pm</p>
            </Card.Body>
            {/* <footer className="blockquote-footer">
                Posted by <cite title="Source Title">Steve</cite>
            </footer>
            <Card.Footer className="blockquote-footer">
                Posted by <cite title="Source Title">Steve</cite>
            </Card.Footer> */}
        </Card>
    )
}

export default ProjectSummary;