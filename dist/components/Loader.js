import React from 'react';

export const Loader = () => {
  return (
    React.createElement('div', { className : " preloader-wrapper active " }, 
      React.createElement('div', { className : " spinner-layer spinner-red-only " }, 
        React.createElement('div', { className : " circle-clipper left " }, 
          React.createElement('div', { className : " circle " }, ),
        ),React.createElement('div', { className : " gap-patch " }, 
          React.createElement('div', { className : " circle " }, ),
        ),React.createElement('div', { className : " circle-clipper right " }, 
          React.createElement('div', { className : " circle " }, ),
        ),
      ),
    ))
}