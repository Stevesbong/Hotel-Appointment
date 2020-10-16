import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

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
        console.log(this.state)
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h3 className="text-dark mb-4">Sign In</h3>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group controlId="content">
                        <Form.Label>Project Content</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.handleChange} placeholder="Enter Content" />
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

export default CreateProject;