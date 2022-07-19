// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// React Bootstrap imports
import Container from 'react-bootstrap/Container';

// Route imports
import { ROUTES } from './routes.js';

// Component imports
import { MainView } from './components/main-view/main-view';
import { RegistrationView } from './components/registration-view/registration-view';
import { LoginView } from './components/login-view/login-view.jsx';
import { ProfileView } from './components/profile-view/profile-view.jsx';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <Router>
          <Route exact path={ROUTES.HOME}>
            <MainView />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <LoginView />
          </Route>
          <Route path={ROUTES.REGISTER}>
            <RegistrationView />
          </Route>
          <Route path={ROUTES.PROFILE}>
            <ProfileView />
          </Route>
        </Router>
      </Container>
    );
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];
const root = ReactDOM.createRoot(container);

// Tells React to render the app in the root DOM element
root.render(<MyFlixApplication />);
