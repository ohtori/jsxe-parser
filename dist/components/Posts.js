import React from 'react';
import {Post} from './Post';
import { useSelector } from 'react-redux';

export const Posts = () => {
  const posts = useSelector(state => {
    return state.posts.posts;
  });
  return (
    React.createElement(React.Fragment, null, 
      React.createElement('h2', null, "POSTS", ),
      posts.map(post => React.createElement(Post  , { key : post.id,  post : post }, ),), ))
}