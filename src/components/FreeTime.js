import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./FreeTime.module.css";

const FreeTime = () => {
  const globalCtx = useContext(GlobalContext);
  const freeTimeData = globalCtx.data.freeTime;

  return (
    <div className={classes["section-wrap"]}>
      <Transition
        in={globalCtx.visibleContent.freeTime}
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
              {freeTimeData.freeTime.map((item) => (
                <li
                  className={classes["content-point"]}
                  key={Math.random().toString()}
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }}
      </Transition>
      <div className={classes["title-wrap"]}>
        <ButtonTitle
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(freeTimeData.id);
          }}
        >
          Free time
        </ButtonTitle>
      </div>
    </div>
  );
};

export default FreeTime;
