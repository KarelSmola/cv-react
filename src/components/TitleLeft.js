import React, { useState } from "react";
import { Transition } from "react-transition-group";

import classes from "./TitleLeft.module.css";

const transitionTimes = {
  enter: 2000,
  exit: 1000,
};

const TitleLeft = (props) => {
  const [visibleContent, setVisibleContent] = useState(false);

  const toggleContent = () => {
    setVisibleContent((prevState) => !prevState);
  };

  return (
    <div className={classes["section-wrap"]}>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title} onClick={toggleContent}>
          {props.title}
        </h1>
      </div>

      <Transition
        in={visibleContent}
        timeout={transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${classes["content-wrap"]} ${
            state === "entering"
              ? classes["show-content"]
              : state === "exiting"
              ? classes["hide-content"]
              : null
          }`;

          return (
            <ul className={contentClasses}>
              {props.data.map((item) => (
                <li className={classes["content-point"]}>{item}</li>
              ))}
            </ul>
          );
        }}
      </Transition>
    </div>
  );
};

export default TitleLeft;
