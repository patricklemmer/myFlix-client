//React imports
import React from 'react';

// React Bootstrap imports
import { Button, Col, Container, Row, Col } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';

// Stylesheet imports
import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container className="director-view">
        <Row className="mb-5">
          <Button
            className="dir-back-button"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Row>
        <Row className="mt-5 mb-4">
          <Col className="label" xs={12}>
            Director:{' '}
          </Col>
          <Col className="value dir-name">{director.Name}</Col>
        </Row>
        <Row className="mb-4">
          <Col className="label" xs={12}>
            Bio:{' '}
          </Col>
          <Col className="value">{director.Bio}</Col>
        </Row>
        <Row>
          <Col className="label" xs={12}>
            Year of Birth:{' '}
          </Col>
          <Col className="value">{director.Birth}</Col>
        </Row>
        {director.Death && (
          <Row>
            <Col className="label">Death: </Col>
            <Col className="value">{director.Death}</Col>
          </Row>
        )}
      </Container>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string,
  }).isRequired,
};
