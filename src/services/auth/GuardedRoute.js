
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import authService from './AuthService'
const GuardedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (authService.isAuthenticated === true || localStorage.getItem('token'))
            ? <Component {...props} />
            : <Redirect to='/auth/login' />
    )} />
)

export default GuardedRoute;