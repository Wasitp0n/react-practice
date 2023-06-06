import React from 'react';
import classes from './Greeting.module.css';

const Greeting = (props) => {
  const { name } = props;
  //conditional
  const isLogin = true;

  return (
    <div className={classes.card}>
      <h1>Hallo der Welt</h1>
      <h2>Ich praktizieren React</h2>
      <p>{isLogin ? name : 'somebody'}</p>
      <p>{isLogin && <p>Ich weiß es gar nicht</p>}</p>
    </div>
  );
};

export default Greeting;
