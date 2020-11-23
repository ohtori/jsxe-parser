import React from 'react';
const Link = (e) => {
  return React.createElement('div', null)
}

export const LinksList = ({links}) => {
  if (!links.length) {
    return React.createElement('p', { className : " center " }, "No links now", )}
  return (
    React.createElement('table', null, 
      React.createElement('thead', null, 
        React.createElement('tr', null, 
            React.createElement('th', null, "No", ),
            React.createElement('th', null, "Original", ),
            React.createElement('th', null, "Shorts", ),
            React.createElement('th', null, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C", ),
        ),
      ),

      React.createElement('tbod', null, 
        links.map((link, index) => {
          return (
            React.createElement('tr', { key : link._id }, 
              React.createElement('td', null, index +1, ),
              React.createElement('td', null, link.from, ),
              React.createElement('td', null, link.to, ),
              React.createElement('td', null, React.createElement(Link  , { to : `/detail/{p1}, ` }, "Open", ),),
            ))
        }), ),
    ));
}