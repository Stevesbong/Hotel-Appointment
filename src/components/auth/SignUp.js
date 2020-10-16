import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class SignUp extends Component {
    state ={
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                    <h3 className="text-dark mb-4">Sign Up</h3>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleChange} type="password" placeholder="Enter password" />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Sign up</Button>
                </Form>
            </Container>
        )
    }
}

export default SignUp;
