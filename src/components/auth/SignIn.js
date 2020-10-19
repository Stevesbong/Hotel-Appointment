import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
    state ={
        email: '',
        password: ''
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
        this.props.signIn(this.state);
    }
    render() {
        const { authError } = this.props;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h3 className="text-light mb-4">Sign In</h3>
                    <Form.Group controlId="email">
                        <Form.Label className="text-light">Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control onChange={this.handleChange} type="password" placeholder="Enter password" />
                        <Form.Text className="text-light" id="passwordHelpBlock">
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                        { authError ? ( <Container className="text-center text-danger bg-white col-3 py-4 rounded">
                                            <p className="m-0">{authError}</p>
                                        </Container> ) : null }
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credential) => dispatch(signIn(credential))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
