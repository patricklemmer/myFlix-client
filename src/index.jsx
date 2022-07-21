// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// React Bootstrap imports
import Container from 'react-bootstrap/Container';

//Redux imports
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

// Route imports
import { ROUTES } from './routes.js';

// Component imports
import MainView from './components/main-view/main-view';
import { RegistrationView } from './components/registration-view/registration-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';
import { ProfileView } from './components/profile-view/profile-view';

const store = createStore(moviesApp, devToolsEnhancer());

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    {/* 
                    <Router>
                        <Route path={ROUTES.PROFILE}>
                            <ProfileView />
                        </Route>
                        <Route exact path={ROUTES.HOME}>
                            <MainView />
                        </Route>
                        <Route path={ROUTES.REGISTER}>
                            <RegistrationView />
                        </Route>
                    </Router>
*/}
                    <MainView />
                </Container>
            </Provider>
        );
    }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];
const root = ReactDOM.createRoot(container);

// Tells React to render the app in the root DOM element
root.render(<MyFlixApplication />);
