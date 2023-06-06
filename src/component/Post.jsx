import React from 'react';
import classes from './Post.module.css';

const Post = ({ id, title }) => {
  console.log(id);
  const handleClick = (id) => {
    alert(`Nach Klicken ${id} clicked`);
  };
  return (
    <div onClick={() => handleClick(id)} className={classes.post}>
      <p>id: {id}</p>
      <p>title: {title}</p>
    </div>
  );
};

export default Post;
