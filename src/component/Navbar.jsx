import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <p>Navbar</p>
      <NavLink to="/" className={(arg) => (arg.isActive ? classes.Active : undefined)}>
        Tasks
      </NavLink>
      <NavLink to="/profile" className={(arg) => (arg.isActive ? classes.Active : undefined)}>
        Profile
      </NavLink>
      {/* <NavLink to="/addData" className={(arg) => (arg.isActive ? classes.Active : undefined)}>
        add Data
      </NavLink> */}
      <button className={classes.login}>Login</button>
    </nav>
  );
};

export default Navbar;
