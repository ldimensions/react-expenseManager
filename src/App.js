import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const loading = () => <div className="">Loading...</div>;

const Login = React.lazy(() => import('./containers/Login/Login'));
const Register = React.lazy(() => import('./containers/Register/Register'));
const Main = React.lazy(() => import('./containers/Main/Main'));

class App extends Component {
    
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <React.Suspense fallback={loading()}>
                        <Switch>
                            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                            <Route path="/" render={props => <Main {...props} /> } />
                        </Switch>
                    </React.Suspense>
                </Router>
            </Provider>
        );
    }
}

export default App;
