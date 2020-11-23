import React, { useContext } from 'react';
const NavLink = (e) => {
  e.preventDefault();
  return React.createElement('div', null);
};


export const Navbar = () => {


  const logoutHandler = (e) => {
    e.preventDefault();
  }
  return (
    React.createElement('nav', null, 
      React.createElement('div', { className : " nav-wrapper lime lighten-1 " }, 
        React.createElement('span', { className : " brand-logo " }, ),
        React.createElement('ul', { id : " nav-mobile ", className : " right hide-on-med-and-down " }, 
          "Hello", React.createElement('li', null, React.createElement(NavLink  , { to : " /create " }, "Hello world!", ),),
          React.createElement('li', null, React.createElement(NavLink  , { to : " /links " }, ),),
          React.createElement('li', null, React.createElement('a', { href : " / ", onClick : logoutHandler }, ),),
        ),
      ),
    ))
}