import React, { useState } from "react";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [crossMobileBtn, setCrossMobileBtn] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
    setCrossMobileBtn((prevState) => !prevState);
  };

  const navClasses = mobileNav
    ? `${classes.nav} ${classes.visible}`
    : `${classes.nav}`;

  const mobileNavClasses = crossMobileBtn
    ? `${classes["mobile-nav-btn"]} ${classes.cross}`
    : `${classes["mobile-nav-btn"]}`;

  return (
    <div className={classes.navigation}>
      <nav className={navClasses}>
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]} onClick={toggleMobileNav}>
            <a className={classes["nav-link"]} href="#personal">
              Personal
            </a>
          </li>
          <li className={classes["nav-item"]} onClick={toggleMobileNav}>
            <a className={classes["nav-link"]} href="#stack">
              Stack
            </a>
          </li>
          <li className={classes["nav-item"]} onClick={toggleMobileNav}>
            <a className={classes["nav-link"]} href="#skills">
              Skills
            </a>
          </li>
          <li className={classes["nav-item"]} onClick={toggleMobileNav}>
            <a className={classes["nav-link"]} href="#education">
              Education
            </a>
          </li>
          <li className={classes["nav-item"]} onClick={toggleMobileNav}>
            <a className={classes["nav-link"]} href="#work">
              Work
            </a>
          </li>
          <li className={classes["nav-item"]} onClick={toggleMobileNav}>
            <a className={classes["nav-link"]} href="#freeTime">
              Free time
            </a>
          </li>
        </ul>
        <button className={mobileNavClasses} onClick={toggleMobileNav}>
          <div className={classes["menu"]}></div>
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
