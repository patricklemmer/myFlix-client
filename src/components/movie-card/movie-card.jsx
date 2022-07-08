// React imports
import React from 'react';

// React Bootstrap imports
import { Button, Card } from 'react-bootstrap';

import axios from 'axios';

import { Link } from 'react-router-dom';

// Other imports
import PropTypes from 'prop-types';

import './movie-card.scss';

// Begin component
export class MovieCard extends React.Component {
  //   render() {
  //     const { movie, onMovieClick } = this.props;
  //     return (
  //       <Card>
  //         <Card.Img variant="top" src={movie.ImageURL} crossOrigin="anonymous" />
  //         <Card.Body>
  //           <Card.Title>{movie.Title}</Card.Title>
  //           <Card.Text>{movie.Description}</Card.Text>
  //           <Button onClick={() => onMovieClick(movie)} variant="link">
  //             Open
  //           </Button>
  //         </Card.Body>
  //       </Card>
  //     );
  //   }
  // }

  async addToFavoriteList(movieId) {
    const currentUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    try {
      let response = await axios.put(
        `      .get('https://patricklemmer-myflix.herokuapp.com/movies', {
        /users/${currentUser}/movies/${movieId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
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
        <Card.Body>
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
