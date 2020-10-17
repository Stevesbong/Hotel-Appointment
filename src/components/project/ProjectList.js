import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <Container className="project-list">
            {/* projects && means, if we have projects, then map through it */}
            { projects && projects.map( project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            }) }
        </Container>
    )
}

export default ProjectList;