import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    React.createElement('div', null, 
      React.createElement('h2', null, "Link", ),
      React.createElement('p', null, "Your link", React.createElement('a', { href : link.to,  target : " _blank ", rel : " noopener noreferrer " }, link.to, ),),
      React.createElement('p', null, "From", React.createElement('a', { href : link.from,  target : " _blank ", rel : " noopener noreferrer " }, link.from, ),),
      React.createElement('p', null, "Link click count", React.createElement('strong', null, link.clicks, ),),
      React.createElement('p', null, "Creation date", React.createElement('strong', null, new Date(link.date).toLocaleDateString(), ),),
    ));
}