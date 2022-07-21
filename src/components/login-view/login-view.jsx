// React imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// React Bootstrap imports
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

// Other imports
import axios from 'axios';
import PropTypes from 'prop-types';

// Stylesheet imports
import './login-view.scss';

// Begin component
export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username is required');
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr('Username must be at least 5 characters long');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password is required');
      isReq = false;
    } else if (password.length < 6) {
      setPassword('Password must be at least 6 characters long');
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      try {
        /* Send request to the server for authentication */
        let { data } = await axios.post(
          'https://patricklemmer-myflix.herokuapp.com/login',
          {
            Username: username,
            Password: password,
          }
        );
        props.onLoggedIn(data);
      } catch (e) {
        console.log('No such user');
      }
    }
  };

  return (
    <Container id="login-form">
      <Row className="justify-content-center">
        <h2>Log in</h2>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm={10} md={8} lg={6}>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              {/* display validation error */}
              {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {/* display validation error */}
              {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Row className="mt-4 justify-content-start">
              <Col sm={10} md={8} lg={6}>
                <Button
                  className="btn-log"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
