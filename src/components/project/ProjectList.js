import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return (
        <Container className="project-list">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </Container>
    )
}

export default ProjectList;