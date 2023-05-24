import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import SectionWrapper from "./UI/SectionWrapper";
import ButtonTitle from "./UI/ButtonTitle";
import classes from "./FreeTime.module.css";
import globalClasses from "../components/UI/GlobalClasses.module.css";

const FreeTime = () => {
  const globalCtx = useContext(GlobalContext);
  const freeTimeData = globalCtx.data.freeTime;

  return (
    <SectionWrapper id="freeTime">
      <Transition
        in={globalCtx.visibleContent.freeTime}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${globalClasses["left-content-wrap"]} ${
            state === "entering"
              ? globalClasses["show-content"]
              : state === "exiting"
              ? globalClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <ul className={globalClasses["left-content-list"]}>
                {freeTimeData.freeTime.map((item) => (
                  <li
                    className={globalClasses["left-content-list-point"]}
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
      <div className={globalClasses["title-wrap-right"]}>
        <ButtonTitle
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(freeTimeData.id);
          }}
        >
          Free time
        </ButtonTitle>
      </div>
    </SectionWrapper>
  );
};

export default FreeTime;
