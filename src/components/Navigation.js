import React from "react";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#personal">
            Personal
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#stack">
            Stack
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#skills">
            Skills
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#education">
            Education
          </a>
        </li>
        <a className={classes["nav-link"]} href="#work">
          Work
        </a>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#freeTime">
            Free time
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
