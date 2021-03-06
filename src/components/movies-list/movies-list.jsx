// React imports
import React from 'react';

// React Bootstrap imports
import Col from 'react-bootstrap/Col';

// Redux imports
import { connect } from 'react-redux';

// Component imports
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList({ movies, visibilityFilter }) {
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
    <>
      <Col md={12}>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Col>

      {filteredMovies.map((m) => (
        <Col sm={6} md={6} lg={4} xl={3} key={m._id}>
          <MovieCard movie={m} />
        </Col>
      ))}
    </>
  );
}

export default connect(mapStateToProps)(MoviesList);
