import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/vendor/linearicons/style.css";
import "./assets/vendor/chartist/css/chartist-custom.css";
import "./assets/vendor/toastr/toastr.min.css";
import "./assets/css/main.css";
import "./assets/css/demo.css";

import Admin from './layouts/Admin';
import Authentication from './layouts/Authentication';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const hist = createBrowserHistory();
const BaseRoute = (
    <Router history={hist}>
        <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Authentication} />
            <Route path="/lockscreen" component={Authentication} />
            <Redirect from="/" to="/admin/dashboard" />
        </Switch>
    </Router>
);
ReactDOM.render(
    <Provider store={store}>
        {BaseRoute}
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
