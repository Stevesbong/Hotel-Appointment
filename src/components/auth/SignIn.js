import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

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
        this.props.history.push('/');
    }
    render() {
        const { authError, auth } = this.props;

        // if user is sign in, they don't need to see this component(page)
        if(auth.uid) return <Redirect to='/' />
        return (
            <React.Fragment>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h3 className="text-light mb-4">Sign In</h3>
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
                        <Button variant="primary" type="submit">Login</Button>
                            { authError ? 
                                ( <Container className="text-center text-danger bg-light col-md-6 py-4 rounded" style={{ opacity: '.7' }}>
                                    <p className="m-0 font-weight-bold">{authError}</p>
                                </Container> ) : null }
                    </Form>
                </Container>
                <Container className="col-auto bg-secondary" style={{ position: 'absolute', top: '12%', right: '8%', opacity: '.8'}}>
                    <p className="mb-1 font-weight-bolder text-light">Test email and password</p>
                    <p className="ml-2 my-0 text-light">Email: test@test.com</p>
                    <p className="ml-2 my-0 text-light">Password: test1234</p>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credential) => dispatch(signIn(credential))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
