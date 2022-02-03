import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Forget } from './components/Forget';
import Home from './components/Home';
import { Login } from './components/Login';
import UserList from './components/Users/UserList';
import CreateUser from './components/Users/CreateUser';
import UpdateUser from './components/Users/UpdateUser';
import UserDetails from './components/Users/UserDetails';
import EmpList from './components/Employees/EmpList';
import EmpDetails from './components/Employees/EmpDetails';
import CreateEmp from './components/Employees/CreateEmp';
import UpdateEmp from './components/Employees/UpdateEmp';
import Navbar from './components/Navbar';
import Reports from './components/Reports/Reports';

export function Routes() {
    return (
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                    <Navbar />
                </div>
                <div className='col px-0'>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/error' component={ErrorPage} />
                        <Route exact path='/reset' component={Forget} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/users' component={UserList} />
                        <Route exact path='/users/details' component={UserDetails} />
                        <Route exact path='/users/create' component={CreateUser} />
                        <Route exact path='/users/update' component={UpdateUser} />
                        <Route exact path='/employees' component={EmpList} />
                        <Route exact path='/employees/details' component={EmpDetails} />
                        <Route exact path='/employees/create' component={CreateEmp} />
                        <Route exact path='/employees/update' component={UpdateEmp} />
                        <Route exact path='/reports' component={Reports} />
                        <Redirect to='/error' />
                    </Switch>
                </div>
            </div>
        </div>
    );
}