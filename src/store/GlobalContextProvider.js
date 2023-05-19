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
    freeTime: false,
  });

  const transitionTimes = {
    enter: 2000,
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
