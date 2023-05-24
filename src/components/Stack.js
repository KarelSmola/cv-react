import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import SectionWrapper from "./UI/SectionWrapper";
import ButtonTitle from "./UI/ButtonTitle";
import globalClasses from "../components/UI/GlobalClasses.module.css";

const Stack = () => {
  const globalCtx = useContext(GlobalContext);
  const stackData = globalCtx.data.stack;

  return (
    <SectionWrapper id="stack">
      <Transition
        in={globalCtx.visibleContent.stack}
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
              <p className={globalClasses["left-content-list-point"]}>
                Seniority: {stackData.seniority}
              </p>
              <ul className={globalClasses["left-content-list"]}>
                {stackData.stackItems.map((item) => (
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
          onClick={() => {
            globalCtx.showContent(stackData.id);
          }}
        >
          Stack
        </ButtonTitle>
      </div>
    </SectionWrapper>
  );
};

export default Stack;
