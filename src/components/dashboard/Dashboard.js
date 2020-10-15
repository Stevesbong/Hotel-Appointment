import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList'

class Dashboard extends Component {
    render() {
        return (
            <Container className="dashboard my-3">
                <Row>
                    <Col xs={12} md={6}>
                        <ProjectList />
                    </Col>
                    <Col xs={12} md={{ span:5, offset: 1 }}>
                        <Notifications />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;