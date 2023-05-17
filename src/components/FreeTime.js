import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import classes from "./FreeTime.module.css";

const contentData = ["Family", "Programming", "Sport", "Reading"];

const FreeTime = () => {
  const globalCtx = useContext(GlobalContext);

  return (
    <div className={classes["section-wrap"]}>
      <Transition
        in={globalCtx.visibleContent}
        timeout={globalCtx.transitionTimes}
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
              {contentData.map((item) => (
                <li className={classes["content-point"]}>{item}</li>
              ))}
            </ul>
          );
        }}
      </Transition>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title} onClick={globalCtx.showContent}>
          Free time
        </h1>
      </div>
    </div>
  );
};

export default FreeTime;
