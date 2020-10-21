import React from 'react';
import { Container } from 'react-bootstrap';

import loading from '../../assets/spinner.gif';

const Loading = () => {
    return (
        <Container className="loading d-flex justify-content-center">
            <img
                src={ loading }
                alt='Loading'
            />
        </Container>
    )
}

export default Loading;