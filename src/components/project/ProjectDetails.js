import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteProject } from '../../store/actions/projectActions';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = ({ match, project, deleteProject, auth }) => {
    console.log(match.params.id, 'compo')
    const projectId = match.params.id
    // if user is not sign in, they cannot access this component(page)
    if(!auth.uid) return <Redirect to='/signin' />

    if( project ) {
        return (
            <Container className="project-details">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title as="h1" className="text-dark">{ project.title }</Card.Title>
                        <p className="blockquote pl-3">{ project.content }</p>
                    </Card.Body>
                    <Card.Footer className="blockquote-footer py-0 card-footer border-secondary">
                        <p className="d-inline-block my-1 lead font-weight-normal">Posted by <cite title="Source Title">{ project.authorFirstName } { project.authorLastName }</cite></p>
                        <p className="text-secondary lead">{project.createdAt && moment(project.createdAt.toDate()).calendar()}</p>
                    </Card.Footer>
                </Card>
                <Button variant="danger float-right mt-3 mx-1" type="button" as={ Link } to="/" onClick={ () => deleteProject(projectId)}>Delete</Button>
                <Button variant="info float-right mt-3 mx-1" type="button" as={ Link } to="/">Go Home</Button>
            </Container>
        )
    } else {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <p className="text-center">Loading project . . .</p>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // project ID
    const id = ownProps.match.params.id;
    // get projects from firestore database
    const projects = state.firestore.data.projects;
    // get a single project with ID from params
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);