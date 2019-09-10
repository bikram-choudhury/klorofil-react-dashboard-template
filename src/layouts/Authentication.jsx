import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Views/Login';
import LockScreen from '../Views/LockScreen';

export default class Authentication extends Component {
    render() {
        return (
            <div id="wrapper">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/lockscreen" component={LockScreen} />
                </Switch>
            </div>
        )
    }
}