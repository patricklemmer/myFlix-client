// React imports
import React, { useState } from 'react';

// React Bootstrap imports
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

// Other imports
import PropTypes from 'prop-types';
import axios from 'axios';

// Stylesheet imports
import './profile-view.scss';
export function UpdateView(props) {
  const { user } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
  });

  // validate user inputs
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
    } else if (email.indexOf('@') === -1) {
      setValues({ ...values, emailErr: 'Enter a valid email' });
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      const token = localStorage.getItem('token');
      axios
        .put(
          `https://patricklemmer-myflix.herokuapp.com/users/${user.Username}`,
          {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response.data);
          alert('Profile was successfully updated.');
          window.open('/users/:username', '_self');
        })
        .catch((error) => {
          console.error(error);
          alert('Unable to update profile.');
        });
    }
  };

  return (
    <Container id="update-form">
      <Row className="mb-3 mt-5">
        <h3>Edit profile</h3>
      </Row>
      <Row>
        <Col sm={10} md={8} lg={6}>
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
                placeholder="yourmail@mail.com"
                required
              />
              {/* display validation error */}
              {values.emailErr && <p>{values.emailErr}</p>}
            </Form.Group>
            <Form.Group controlId="formBirthday" className="mt-3">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="YYYY-MM-DD"
              />
            </Form.Group>
            <Form.Group controlId="formBirthday" className="mt-4">
              <Button
                className="update-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Edit profile
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

UpdateView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
