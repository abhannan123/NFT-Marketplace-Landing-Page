import { ThemeProvider } from "styled-components";
import Navigation from "./Components/Navigation";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Roadmap from "./Components/Sections/Roadmap";
import Showcase from "./Components/Sections/Showcase";
import GlobalStyles from "./Styles/GlobalStyles";
import Team from "./Components/Sections/Team";
import Faq from "./Components/Sections/Faq";
import Footer from "./Components/Footer";
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
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
