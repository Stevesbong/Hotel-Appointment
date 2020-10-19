import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <Container className="project-list">
            {/* projects && means, if we have projects, then map through it */}
            { projects && projects.map( project => {
                return (
                    <Link className="text-decoration-none" to={ '/project/' + project.id } key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            }) }
        </Container>
    )
}

export default ProjectList;