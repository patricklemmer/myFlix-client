// React imports
import React from 'react';

// React Bootstrap imports
import { Button, Col, Container, Row } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';

// Stylesheet imports
import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Container className="genre-view">
        <Row className="mb-5">
          <Button
            className="gen-back-button"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Row>
        <Row className="mt-5 mb-4">
          <Col className="label">Genre: </Col>
          <Col className="value gen-name" xs={12}>
            {genre.Name}
          </Col>
        </Row>
        <Row>
          <Col className="label">Description: </Col>
          <Col className="value" xs={12}>
            {genre.Description}
          </Col>
        </Row>
      </Container>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};
