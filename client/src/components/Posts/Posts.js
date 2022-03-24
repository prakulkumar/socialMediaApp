import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();

  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
