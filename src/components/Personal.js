import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Personal.module.css";
import transClasses from "../components/UI/Content.module.css";

const Personal = () => {
  const globalCtx = useContext(GlobalContext);
  const personalData = globalCtx.data.personal;

  return (
    <div className={classes.personal}>
      <div className={classes["title-wrap"]}>
        <ButtonTitle
          onClick={() => {
            globalCtx.showContent(personalData.id);
          }}
        >
          Personal
        </ButtonTitle>
      </div>

      <Transition
        in={globalCtx.visibleContent.personal}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${transClasses["right-content-wrap"]} ${
            state === "entering"
              ? transClasses["show-content"]
              : state === "exiting"
              ? transClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <p className={transClasses["content-point"]}>
                {personalData.location}
              </p>
              <p className={transClasses["content-point"]}>
                {personalData.birthday}
              </p>
              <p>
                <a
                  className={transClasses["content-point"]}
                  href="#mail"
                  mailto="karelsmola21@gmail.com"
                >
                  {personalData.mail}
                </a>
              </p>
              <p>
                <a
                  className={transClasses["content-point"]}
                  href="#phone"
                  mailto="karelsmola21@gmail.com"
                >
                  {personalData.phone}
                </a>
              </p>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Personal;
