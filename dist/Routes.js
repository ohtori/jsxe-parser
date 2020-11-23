import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {LinksPage} from './pages/LinksPage';
import {CreatePage} from './pages/CreatePage';
import {DetailPage} from './pages/DetailPage';
import { AuthPage } from './pages/AuthPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      React.createElement(Switch, null, 
        React.createElement(Route  , { path : " /links " }, 
          React.createElement(LinksPage , null)
        ),
        React.createElement(Route  , { path : " /create ", exact : true }, 
          React.createElement(CreatePage , null)
        ),
        React.createElement(Route  , { path : " /detail/:id " }, 
          React.createElement(DetailPage , null)
        ),
        React.createElement(Redirect  , { to : " /create " }, ),
      ))
  }
  return (
    React.createElement(Switch, null, 
      React.createElement(Route  , { to : " / " }, 
        React.createElement(AuthPage , null)
      ),
      React.createElement(Redirect  , { to : " / " }, ),
    ))
}