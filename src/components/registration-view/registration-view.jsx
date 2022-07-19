// React imports
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Other imports
import PropTypes from 'prop-types';
import axios from 'axios';

// Stylesheet import
import './registration-view.scss';

// Begin component
export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
  });

  // User input validation
  const validate = () => {
    let isReq = true;
    if (!username) {
      setValues({ ...values, usernameErr: 'Username is required' });
      isReq = false;
    } else if (username.length < 5) {
      setValues({
        ...values,
        usernameErr: 'Username must be at least 5 characters long',
      });
      isReq = false;
    }
    if (!password) {
      setValues({ ...values, passwordErr: 'Password is required' });
      isReq = false;
    } else if (password.length < 6) {
      setValues({
        ...values,
        passwordErr: 'Password must be at least 6 characters long',
      });
      isReq = false;
    }
    if (!email) {
      setValues({ ...values, emailErr: 'Email is required' });
      isReq = false;
    } else if (
      !email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setValues({ ...values, emailErr: 'Enter a valid email address' });
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post('https://patricklemmer-myflix.herokuapp.com/register', {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert('Registration successful, please login!');
          window.open('/', '_self');
        })
        .catch((response) => {
          console.error(response);
          alert('Unable to register');
        });
    }
  };

  return (
    <>
      <Row className="justify-content-center">
        <h2>Sign up for myFlix</h2>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm="10" md="8" lg="6">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              {/* display validation error */}
              {values.usernameErr && <p>{values.usernameErr}</p>}
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              {/* display validation error */}
              {values.passwordErr && <p>{values.passwordErr}</p>}
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@mail.com"
                required
              />
              {/* display validation error */}
              {values.emailErr && <p>{values.emailErr}</p>}
            </Form.Group>
            <Form.Group controlId="formBirthday" className="mt-3">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="text"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="YYYY-MM-DD"
              />
            </Form.Group>
            <Row className="mt-4 justify-content-start">
              <Col sm="10" md="8" lg="6">
                <Button variant="warning" type="submit" onClick={handleSubmit}>
                  Register
                </Button>
                <p></p>
                <p>
                  Already registered? Sign in <Link to={'/'}>here</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
