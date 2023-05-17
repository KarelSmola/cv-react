import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import classes from "./Stack.module.css";

const Stack = () => {
  const globalCtx = useContext(GlobalContext);
  const stackData = globalCtx.data.stack;

  return (
    <div className={classes["section-wrap"]}>
      <Transition
        in={globalCtx.visibleContent.stack}
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
            <div className={contentClasses}>
              <p className={classes["content-point"]}>
                Seniority {stackData.seniority}
              </p>
              <ul className={classes["stack-items"]}>
                {stackData.stackItems.map((item) => (
                  <li className={classes["content-point"]}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }}
      </Transition>
      <div className={classes["title-wrap"]}>
        <h1
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(stackData.id);
          }}
        >
          Stack
        </h1>
      </div>
    </div>
  );
};

export default Stack;
