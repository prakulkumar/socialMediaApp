import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';

import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

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
