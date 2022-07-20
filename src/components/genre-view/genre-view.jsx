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
        <Row>
          <Col className="label">Genre: </Col>
          <Col className="value" xs={8}>
            {genre.Name}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="label">Description: </Col>
          <Col className="value" xs={8}>
            {genre.Description}
          </Col>
        </Row>
        <Button
          className="d-block mt-5"
          onClick={() => {
            onBackClick(null);
          }}
          variant="warning"
        >
          Back
        </Button>
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
