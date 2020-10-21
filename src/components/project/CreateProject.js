import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// Higher Order Component (HOC) that connecting redux store and react
// Connect this Dashboard component with the redux store
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Action creator
import { createProject } from '../../store/actions/projectActions';


class CreateProject extends Component {
    state ={
        title: '',
        content: ''
    };

    // Handling input field
    handleChange = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // Handling form submit
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;

        // if user is not sign in, they cannot access this component(page)
        if(!auth.uid) return <Redirect to='/signin' />
        
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h3 className="text-light mb-4">Create new project</h3>
                    <Form.Group className="col-6" controlId="title">
                        <Form.Label className="text-light">Title</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group className="col-6" controlId="content">
                        <Form.Label className="text-light">Project Content</Form.Label>
                        <Form.Control as="textarea" rows="4" onChange={this.handleChange} placeholder="Enter Content" />
                    </Form.Group>
                    {/* <Form.Group controlId="textarea">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">Create</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

/**
 * map our dispatch from the store to the props in this component
 * @param {*} dispatch dispatch of our redux store
 * @returns { object } properties of this component props
 */
const mapDispatchToProps = ( dispatch ) => {
    return {
        createProject: ( project ) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);