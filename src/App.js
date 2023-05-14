import React from "react";
import Navigation from "./components/Navigation";
import Wrapper from "./components/UI/Wrapper";
import About from "./components/About";
import Stack from "./components/Stack";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";

const App = () => {
  return (
    <main>
      <Navigation />
      <Wrapper>
        <About />
        <Stack />
        <Skills />
        <Education />
        <Work />
      </Wrapper>
    </main>
  );
};

export default App;
