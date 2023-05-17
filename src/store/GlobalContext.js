import { createContext } from "react";

const GlobalContext = createContext({
  data: [],
  visibleContent: {},
  showContent: () => {},
  transitionTimes: {},
});

export default GlobalContext;
