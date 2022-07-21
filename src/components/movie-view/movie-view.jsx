// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// React Bootstrap imports
import { Button, Col, Container, Row } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';

// Stylesheet imports
import './movie-view.scss';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className="movie-view">
        <Row className="mb-5">
          <Button
            className="movie-back-button"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Row>
        <Row className="movie-title mb-4 mt-5">
          <Col className="movie-title_value">{movie.Title}</Col>
        </Row>
        <Row>
          <Col xs={12} className="movie-poster mb-4">
            <img src={movie.ImageURL} crossOrigin="anonymous" />
          </Col>
          <Col className="movie-description  mb-4">
            <Col className="movie-descr_label">Description: </Col>
            <Col className="movie-descr_value">{movie.Description}</Col>
          </Col>
        </Row>
        <Row className="button-group d-block">
          <Link
            to={`/directors/${movie.Director.Name}`}
            className="button-link"
          >
            <Button className="btn-dir">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`} className="button-link">
            <Button className="btn-gen">Genre</Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.number.isRequired,
      Died: PropTypes.string,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
