import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';

const ProjectDetails = ({ match, project, auth }) => {
    
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
                    <p className="text-secondary lead">14th October, 11pm</p>
                </Card.Footer>
                </Card>
                <Button variant="danger float-right mt-3" type="button" as={ Link } to="/">Go Home</Button>
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);