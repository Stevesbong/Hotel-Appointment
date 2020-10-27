import React from 'react';
import { Container, Card } from 'react-bootstrap';
import moment from 'moment'

const Notifications = ({ notifications }) => {
    return (
        <Container>
            <Card className="notifications border-0 my-3">
                <Card.Body className="text-secondary pb-2">
                    <Card.Title as="h4" className="text-dark">Notifications</Card.Title>
                </Card.Body>
                <Card.Footer className="blockquote py-0 card-footer border-0">

                    { notifications && notifications.map( notification => {
                        return (
                            <React.Fragment key={notification.id}>
                                <p className="d-inline-block my-1 lead font-weight-normal text-info text-capitalize">{notification.user}  <cite style={{color: '#6c757d'}} title="Source Title">{notification.content}</cite></p>
                                <p className="text-secondary lead">{moment(notification.time.toDate()).fromNow()}</p>
                            </React.Fragment>
                        )
                    })}

                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Notifications;