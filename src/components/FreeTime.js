import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./FreeTime.module.css";
import transClasses from "../components/UI/Content.module.css";

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
          const contentClasses = `${transClasses["left-content-wrap"]} ${
            state === "entering"
              ? transClasses["show-content"]
              : state === "exiting"
              ? transClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>

            <ul className={classes["free-time-items"]}>
              {freeTimeData.freeTime.map((item) => (
                <li
                  className={transClasses["content-point"]}
                  key={Math.random().toString()}
                >
                  {item}
                </li>
              ))}
            </ul>
            </div>
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
