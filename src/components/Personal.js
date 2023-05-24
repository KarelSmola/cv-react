import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import {
  MapPin,
  BirthStar,
  Email,
  Phone,
  GitHub,
  LinkedIn,
} from "./UI/icons/Icons";
import SectionWrapper from "./UI/SectionWrapper";
import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Personal.module.css";
import globalClasses from "../components/UI/GlobalClasses.module.css";

const Personal = () => {
  const globalCtx = useContext(GlobalContext);
  const personalData = globalCtx.data.personal;

  return (
    <SectionWrapper id="personal">
      <div className={globalClasses["title-wrap-left"]}>
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
          const contentClasses = `${globalClasses["right-content-wrap"]} ${
            state === "entering"
              ? globalClasses["show-content"]
              : state === "exiting"
              ? globalClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <div className={classes.personal}>
                <div className={classes.about}>
                  <div className={classes["point-box"]}>
                    <MapPin className={classes.icon} />
                    <p className={classes.location}>{personalData.location}</p>
                  </div>
                  <div className={classes["point-box"]}>
                    <BirthStar className={classes.icon} />
                    <p className={classes.birth}>{personalData.birthday}</p>
                  </div>
                  <div className={classes["point-box"]}>
                    <Email className={classes.icon} />
                    <p>
                      <a
                        className={classes.mail}
                        href="#mail"
                        mailto="karelsmola21@gmail.com"
                      >
                        {personalData.mail}
                      </a>
                    </p>
                  </div>
                  <div className={classes["point-box"]}>
                    <Phone className={classes.icon} />
                    <p>
                      <a
                        className={classes.phone}
                        href="#phone"
                        mailto="karelsmola21@gmail.com"
                      >
                        {personalData.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className={classes["social-networks"]}>
                  <a
                    className={classes.github}
                    href="https://github.com/KarelSmola"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub />
                  </a>
                  <a
                    className={classes.linkedin}
                    href="https://www.linkedin.com/in/karel-smola-98400312a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </Transition>
    </SectionWrapper>
  );
};

export default Personal;
