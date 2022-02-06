import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Forget } from './components/Forget';
import Home from './components/Home';
import { Login } from './components/Login';

export function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/error' component={ErrorPage} />
            <Route exact path='/reset' component={Forget} />
            <Route exact path='/er-call-tracking' component={Home} />
            <Redirect to='/error' />
        </Switch>
    );
}