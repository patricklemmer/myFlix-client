// React imports
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

// React Bootstrap imports
import { Button, Card, Col } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';
import axios from 'axios';

// Stylesheet imports
import './profile-view.scss';

export function FavouriteMoviesView(props) {
    const { favouriteMovies, currentUser, token } = props;


    const handleMovieDelete = async (movieId) => {
        try {
            await axios.delete(
                `https://patricklemmer-myflix.herokuapp.com/users/${currentUser}/movies/${movieId}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert(`The movie was successfully deleted.`);
            window.open('/users/:username', '_self');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('working');
    }, []);


    return (
        <Fragment>
            {favouriteMovies.length === 0 ? (
                <p>You have no favourite movies yet.</p>
            ) : (
                favouriteMovies.map((movie) => {
                    return (
                        <Col sm={6} md={6} lg={4} xl={3} key={movie._id} className="mb-4">
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
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text>{movie.Description}</Card.Text>
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
                                        className="button btn-remove ml-2"
                                        variant="outline-primary"
                                        size="sm"
                                        onClick={() => {
                                            handleMovieDelete(movie._id);
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
            )}
        </Fragment>
    );
}

FavouriteMoviesView.propTypes = {
    favouriteMovies: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired,
            Death: PropTypes.string,
        }),
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        }),
    })).isRequired,
};
