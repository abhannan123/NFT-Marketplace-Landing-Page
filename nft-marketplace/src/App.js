import { ThemeProvider } from "styled-components";
import Navigation from "./Components/Navigation";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Roadmap from "./Components/Sections/Roadmap";

import GlobalStyles from "./Styles/GlobalStyles";
import { light } from "./Styles/Themes";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
      </ThemeProvider>
    </>
  );
}

export default App;
