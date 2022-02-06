import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Forget } from './components/Forget';
import Home from './components/Home';
import { Login } from './components/Login';
import EmpList from './components/Employees/EmpList';
import EmpDetails from './components/Employees/EmpDetails';
import CreateEmp from './components/Employees/CreateEmp';
import UpdateEmp from './components/Employees/UpdateEmp';

export function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/error' component={ErrorPage} />
            <Route exact path='/reset' component={Forget} />
            <Route exact path='/er-call-tracking' component={Home} />
            <Route exact path='/employees' component={EmpList} />
            <Route exact path='/employees/details' component={EmpDetails} />
            <Route exact path='/employees/create' component={CreateEmp} />
            <Route exact path='/employees/update' component={UpdateEmp} />
            <Redirect to='/error' />
        </Switch>
    );
}