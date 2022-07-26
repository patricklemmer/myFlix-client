// React imports
import React, { useState, useEffect } from 'react';

// React Bootstrap imports
import { Button, Col, Container, Row } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';
import axios from 'axios';

// Component imports
import { FavouriteMoviesView } from './favourite-movies-view';
import { UpdateView } from './update-view';

// Stylesheet imports
import './profile-view.scss';

export function ProfileView(props) {
  const [user, setUser] = useState(props.user);
  const [movies, setMovies] = useState(props.movies);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const currentUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const getUser = async () => {
    try {
      let response = await axios.get(
        `https://patricklemmer-myflix.herokuapp.com/users/${currentUser}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data);

      const favouriteMoviesList = response.data.FavouriteMovies.map((movie) => {
        return movies.find((m) => m._id === movie);
      });

      setFavouriteMovies(favouriteMoviesList);
    } catch {
      (error) => console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://patricklemmer-myflix.herokuapp.com/users/${currentUser}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(`The account ${user.Username} was successfully deleted.`);
      localStorage.clear();
      window.open('/users', '_self');
    } catch {
      (error) => console.error(error);
    }
  };

  const birthdayDate = () => {
    if (user.Birthday) {
      const birthdayWithoutTime = user.Birthday.split('T')[0];
      return birthdayWithoutTime;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container id="profile-form">
      <Row className="mb-3">
        <h3>Your profile</h3>
      </Row>
      <Row>
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Username:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          {user.Username}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Password:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          ******
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Email:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          {user.Email}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Birthday:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          {birthdayDate()}
        </Col>
      </Row>
      <Row className="mb-3 mt-5">
        <h3>Your favourite movies</h3>
      </Row>
      <Row className="mb-3 mt-5">
        <FavouriteMoviesView
          favouriteMovies={favouriteMovies}
          currentUser={currentUser}
          token={token}
        />
      </Row>
      <UpdateView user={user} />
      <Button className="delete-button d-block mt-5" onClick={handleDelete}>
        Delete profile
      </Button>
    </Container>
  );
}

ProfileView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
