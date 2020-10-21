import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

// connect component with single database collection
import { firestoreConnect } from 'react-redux-firebase';


// Higher Order Component (HOC) that connecting redux store and react
// Connect this Dashboard component with the redux store
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props)
        const { projects, auth } = this.props;

        // if user is not sign in, they cannot access this component(page)
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <Container className="dashboard my-3z-index-2 pos-abs">
                <Row>
                    <Col xs={12} md={6}>
                        <ProjectList projects={projects} />
                    </Col>
                    <Col xs={12} md={{ span:5, offset: 1 }}>
                        <Notifications />
                    </Col>
                </Row>
            </Container>
        )
    }
}

/**
 * map our state from the store to the props in this component
 * @param {*} state state of our redux store
 * @returns { object } properties of this component props
 * represent which properties are attached to the props of this component, 
 * so we can access them inside this component
 */
const mapStateToProps = ( state ) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

// Connect is function for HOC
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);