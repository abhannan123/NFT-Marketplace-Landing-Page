import { ThemeProvider } from "styled-components";
import Navigation from "./Components/Navigation";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import GlobalStyles from "./Styles/GlobalStyles";

import Footer from "./Components/Footer";
import { light } from "./Styles/Themes";
import RoadMap from "./Components/Sections/RoadMap";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
