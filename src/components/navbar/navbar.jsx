// React imports
import React, { Fragment } from 'react';

// React Bootstrap imports
import { Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Stylesheet imports
import './navbar.scss';

export function Navbar({ user }) {
  const isAuth = () => {
    let accessToken = localStorage.getItem('token');
    if (accessToken) {
      return accessToken;
    } else {
      return false;
    }
  };

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  return (
    <Navbar className="mb-5" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Myflix logo"
            src="../../assets/logo.svg"
            width="30"
            height="30"
          />{' '}
          Myflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="-basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            {isAuth() && (
              <Fragment>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href={`/users/${user}`}>Profile</Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Sign-out</Nav.Link>
              </Fragment>
            )}
            {!isAuth() && (
              <Fragment>
                <Nav.Link href={'/'}>Sign-in</Nav.Link>
                <Nav.Link href={'/users'}>Sign-up</Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

{
  /* <NavbarBootstrap expand="lg" className="mb-5 navbar">
      <NavbarBootstrap.Brand href="/">
        <h1>myFlix</h1>
      </NavbarBootstrap.Brand>
      <NavbarBootstrap.Toggle aria-controls="navbar-nav" />
      <NavbarBootstrap.Collapse>
        <Nav className="me-auto">
          {isAuth() && (
            <Fragment>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href={`/users/${user}`}>Profile</Nav.Link>
              <Nav.Link onClick={onLoggedOut}>Sign-out</Nav.Link>
            </Fragment>
          )}
          {!isAuth() && (
            <Fragment>
              <Nav.Link href={'/'}>Sign-in</Nav.Link>
              <Nav.Link href={'/users'}>Sign-up</Nav.Link>
            </Fragment>
          )}
        </Nav>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap> */
}
