// React imports
import React from 'react';

// React Bootstrap imports
import Form from 'react-bootstrap/Form';

// Redux imports
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
  return (
    <Form.Control
      onChange={(e) => props.setFilter(e.target.value)}
      value={props.visibilityFilter}
      placeholder="Search"
    />
  );
}

export default connect(null, { setFilter })(VisibilityFilterInput);
