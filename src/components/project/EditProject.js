import React, { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

// Higher Order Component (HOC) that connecting redux store and react
// Connect this Dashboard component with the redux store
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

// Action creator
import { editProject } from '../../store/actions/projectActions';


class EditProject extends Component {
    state ={
        title: '',
        content: ''
    };

    // Handling input field
    handleChange = (e) => {
        console.log(e.target.id)
        const { authorFirstName, authorLastName, authorId, createdAt } = this.props.project;
        this.setState({
            authorFirstName: authorFirstName,
            authorId: authorId,
            authorLastName: authorLastName,
            createdAt: createdAt,
            [e.target.id]: e.target.value
        })
    }

    // Handling form submit
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.editProject(this.state, this.props.match.params.id);
        console.log(this.state, 'submit')
        this.props.history.push('/');
    }
    render() {
        const { project, auth } = this.props;
        console.log(auth, 'auth')
        console.log(project, 'project')

        // if user is not sign in, they cannot access this component(page)
        if(!auth.uid) return <Redirect to='/signin' />
        if( project ) {
            return (
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h3 className="text-light mb-4">Edit plan</h3>
                        <Form.Group className="col-6" controlId="title">
                            <Form.Label className="text-light">Title</Form.Label>
                            <Form.Control onChange={this.handleChange} name='title' type="text" placeholder="Enter Title" />
                        </Form.Group>
                        <Form.Group className="col-6" controlId="content">
                            <Form.Label className="text-light">Plan Content</Form.Label>
                            <Form.Control as="textarea" rows="4" onChange={this.handleChange} name='content' placeholder="Enter Content" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Edit</Button>
                    </Form>
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

const mapDispatchToProps = ( dispatch ) => {
    return {
        editProject: ( project, id ) => dispatch(editProject(project, id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(EditProject);