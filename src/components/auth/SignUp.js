import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

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
        // console.log(this.state)
        this.props.signUp(this.state);

    }
    render() {
        const { auth, authError } = this.props;

        // if user is sign in, they don't need to see this component(page)
        if(auth.uid) return <Redirect to='/' />
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h3 className="text-light mb-4">Sign Up</h3>
                    <Form.Group className="col-md-6" controlId="email">
                        <Form.Label className="text-light">Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="col-md-6" controlId="password">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control onChange={this.handleChange} type="password" placeholder="Enter password" />
                        <Form.Text className="text-light" id="passwordHelpBlock">
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6" controlId="lastName">
                        <Form.Label className="text-light">Last Name</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="col-md-6" controlId="firstName">
                        <Form.Label className="text-light">First Name</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Sign up</Button>
                    { authError ? 
                        ( <Container className="text-center text-danger bg-light col-md-6 py-4 rounded" style={{ opacity: '.7' }}>
                            <p className="m-0 font-weight-bold">{authError}</p>
                        </Container> ) : null }
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
