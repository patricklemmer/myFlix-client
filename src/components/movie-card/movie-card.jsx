// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// React Bootstrap imports
import { Button, Card } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';
import axios from 'axios';

// Stylesheet imports
import './movie-card.scss';

// Begin component
export class MovieCard extends React.Component {
  async addToFavoriteList(movieId) {
    const currentUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    try {
      const url = `https://patricklemmer-myflix.herokuapp.com/users/${currentUser}/movies/${movieId}`;
      let response = await axios.post(
        url,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log('response: ', response);
      alert(`The movie was successfully added to your list.`);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { movie } = this.props;

    return (
      <Card id="movie-card">
        <Link to={`/movies/${movie._id}`}>
          <Card.Img
            className="card-img"
            variant="top"
            src={movie.ImageURL}
            crossOrigin="anonymous"
          />
        </Link>
        <Card.Body className="card-body">
          <Card.Title id="card-title">{movie.Title}</Card.Title>
          <Card.Text className="movie_description">
            {movie.Description}
          </Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button
              className="button btn-open"
              variant="outline-primary"
              size="sm"
            >
              Open
            </Button>
          </Link>
          <Button
            className="button btn-add ml-2"
            variant="outline-primary"
            size="sm"
            onClick={() => this.addToFavoriteList(movie._id)}
          >
            Add
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Born: PropTypes.string,
      Died: PropTypes.string,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
