import React from "react";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]}>
        <li className={classes["list-item"]}>
          <a className={classes["nav-link"]} href="aboutMe">
            About
          </a>
        </li>
        <li>
          <a className={classes["nav-link"]} href="education">
            Education
          </a>
        </li>
        <a className={classes["nav-link"]} href="work">
          Work
        </a>
        <li>
          <a className={classes["nav-link"]} href="skills">
            Skills
          </a>
        </li>
        <li>
          <a className={classes["nav-link"]} href="freeTime">
            Free time
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
