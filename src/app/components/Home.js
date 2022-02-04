import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserList from './Users/UserList';
import CreateUser from './Users/CreateUser';
import UpdateUser from './Users/UpdateUser';
import UserDetails from './Users/UserDetails';
import EmpList from './Employees/EmpList';
import EmpDetails from './Employees/EmpDetails';
import CreateEmp from './Employees/CreateEmp';
import UpdateEmp from './Employees/UpdateEmp';
import Navbar from './Navbar';
import Reports from './Reports/Reports';
import Dashboard from './Dashboard/Dashboard';

function Home() {
    return (
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                    <Navbar />
                </div>
                <div className='col px-0'>
                    <Switch>
                        {/* <Route component={Dashboard} /> */}
                        <Route exact path='/er-call-tracking/users' component={UserList} />
                        <Route exact path='/er-call-tracking/users/details' component={UserDetails} />
                        <Route exact path='/er-call-tracking/users/create' component={CreateUser} />
                        <Route exact path='/er-call-tracking/users/update' component={UpdateUser} />
                        <Route component={EmpList} />
                        <Route exact path='/er-call-tracking/employees/details' component={EmpDetails} />
                        <Route exact path='/er-call-tracking/employees/create' component={CreateEmp} />
                        <Route exact path='/er-call-tracking/employees/update' component={UpdateEmp} />
                        <Route exact path='/er-call-tracking/reports' component={Reports} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Home;
