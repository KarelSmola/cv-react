import { useState } from "react";
import GlobalContext from "./GlobalContext";

const data = {
  personal: {
    id: "personal",
    location: "Prague",
    birthday: "21. 11. 1984",
    mail: "karelsmola21@gmail.com",
    phone: "+420 776 709 339",
    socials: { name: "GitHub", link: "" },
  },
  stack: {
    id: "stack",
    seniority: "Junior",
    stackItems: ["HTML", "CSS (Sass)", "JavaSctipt", "React", "GitHub"],
  },
  skills: {
    id: "skills",
    skills: ["Optimistic", "Team player", "Reliable", "Critical thinking"],
  },
  education: {
    id: "education",
    educationParts: [
      {
        school: "Printing Industry High School of Prague",
        studyTime: { from: 2000, to: 2005 },
        specialization: "Graphic designer / Printing industry",
      },
    ],
  },
  work: {
    id: "work",
    jobs: [
      {
        company: "MTT printing house",
        positions: [
          {
            positionTime: { from: 2000, to: 2005 },
            position: "Graphic designer",
            points: [
              "Adobe software (Illustrator, Photoshop, Adobe InDesign)",
              "creating of leaflets, magazines, visitcards etc.",
            ],
          },
        ],
      },
      {
        company: "PANFLEX, s. r. o.",
        positions: [
          {
            positionTime: { from: 2005, to: 2006 },
            position: "DTP operator",
            points: [
              "Prepress",
              "ESKO software (ArtPro, Nexus)",
              "Adobe software (Illustrator, Photoshop)",
            ],
          },
          {
            positionTime: { from: 2006, to: 2020 },
            position: "Technical Support Specialist",
            points: [
              "Customer Support",
              "Customer and Employee Training",
              "Technical Printing Support",
              "Problem Polver",
            ],
          },
          {
            positionTime: { from: 2020, to: "now" },
            position: "Technican",
            points: [
              "creating automated worklflows",
              "creating ways to production efficiency",
              "ESKO software (Automation Engine, ArtPro+)",
            ],
          },
        ],
      },
    ],
  },
  freeTime: {
    id: "freeTime",
    freeTime: ["Family", "Programming", "Sport", "Reading"],
  },
};

const GlobalContextProvider = (props) => {
  const [visibleContent, setVisibleContent] = useState({
    personal: false,
    stack: false,
    skills: false,
    education: false,
    work: false,
    freeTime: false,
  });

  const transitionTimes = {
    enter: 1000,
    exit: 500,
  };

  const showContent = (id) => {
    setVisibleContent((prevState) => {
      return { ...prevState, [id]: !prevState[id] };
    });
  };

  const initialState = {
    data,
    visibleContent,
    showContent,
    transitionTimes,
  };

  return (
    <GlobalContext.Provider value={initialState}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
