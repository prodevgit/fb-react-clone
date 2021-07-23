import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from "react-router-dom";
import { Router } from 'react-router';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/tailwind.css";
import Auth from './layout/AuthLogin';
import Home from './layout/Home'
import GuardedRoute from './services/auth/GuardedRoute';
import history from './utilities/history'
import AuthRegister from './layout/AuthRegister';
import AuthLogin from './layout/AuthLogin';

ReactDOM.render(
  <Router history={history}>
      <Route path="/auth/login" component={AuthLogin} />
      <Route path="/auth/register" component={AuthRegister} />
      <GuardedRoute path="/" exact component={Home} />
      <Redirect from="*" to="/" />
  </Router>,
  document.getElementById("root")
)

reportWebVitals();
