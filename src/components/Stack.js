import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Stack.module.css";
import transClasses from "../components/UI/Content.module.css";

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
          const contentClasses = `${transClasses["left-content-wrap"]} ${
            state === "entering"
              ? transClasses["show-content"]
              : state === "exiting"
              ? transClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <p className={transClasses["content-point"]}>
                Seniority {stackData.seniority}
              </p>
              <ul className={classes["stack-items"]}>
                {stackData.stackItems.map((item) => (
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
          onClick={() => {
            globalCtx.showContent(stackData.id);
          }}
        >
          Stack
        </ButtonTitle>
      </div>
    </div>
  );
};

export default Stack;
