import React from "react";
import Navigation from "./components/Navigation";
import Wrapper from "./components/UI/Wrapper";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";

const App = () => {
  return (
    <main>
      <Navigation />
      <Wrapper>
        <About />
        <Education />
        <Work />
      </Wrapper>
    </main>
  );
};

export default App;
