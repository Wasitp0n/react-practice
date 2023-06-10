import React, { useState } from 'react';
import classes from './Greeting.module.css';
import Button from 'react-bootstrap/Button';
const Greeting = (props) => {
  // const { name } = props
  // const isLogin = true
  const [name, setName] = useState('Men');

  const handleClick = () => {
    setName('John');
  };

  return (
    <>
      <div className={classes.card}>
        <h3>Welcome!</h3>
        <p>{name}</p>
        {/* <p>{isLogin ? name : 'Unknown'}</p> */}
      </div>
      <button onClick={handleClick}>Change name</button>
      <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button> <Button variant="warning">Warning</Button>{' '}
    </>
  );
};

export default Greeting;
