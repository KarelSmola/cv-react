import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import classes from "./Personal.module.css";

const Personal = () => {
  const globalCtx = useContext(GlobalContext);
  const personalData = globalCtx.data.personal;

  return (
    <div className={classes.personal}>
      <div className={classes["title-wrap"]}>
        <h1
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(personalData.id);
          }}
        >
          Personal
        </h1>
      </div>

      <Transition
        in={globalCtx.visibleContent.personal}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${classes["content-wrap"]} ${
            state === "entering"
              ? classes["show-personal-content"]
              : state === "exiting"
              ? classes["hide-personal-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <p className={classes["content-point"]}>
                {personalData.location}
              </p>
              <p className={classes["content-point"]}>
                {personalData.birthday}
              </p>
              <p>
                <a
                  className={classes["content-point"]}
                  href
                  mailto="karelsmola21@gmail.com"
                >
                  {personalData.mail}
                </a>
              </p>
              <p>
                <a
                  className={classes["content-point"]}
                  href
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
