import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';

// Higher Order Component (HOC) that connecting redux store and react
// Connect this Dashboard component with the redux store
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props)
        const { projects } = this.props;

        return (
            <Container className="dashboard my-3">
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
    return {
        projects: state.project.projects
    }
}

// Connect is function for HOC
export default connect(mapStateToProps)(Dashboard);