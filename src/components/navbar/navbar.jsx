// React imports
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// React Bootstrap imports
import { Container, Navbar, Nav } from 'react-bootstrap';

// Media imports
import logo from '../../../assets/logo.png';

// Stylesheet imports
import './navbar.scss';
import { ROUTES } from '../../routes';

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
                <Navbar.Brand style={{ color: '#d96440' }} href="/">
                    <img alt="Myflix logo" src={logo} width="60" height="60" /> Myflix
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="-basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {isAuth() && (
                            <Fragment>
                                <Link className='nav-link' to={ROUTES.HOME}>Home</Link>
                                <Link className='nav-link' to={`/users/${user}`}>user profile</Link>
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
