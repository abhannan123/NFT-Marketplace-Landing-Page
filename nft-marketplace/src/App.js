import { ThemeProvider } from "styled-components";
import Navigation from "./Components/Navigation";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import GlobalStyles from "./Styles/GlobalStyles";

import Footer from "./Components/Footer";
import { dark, light } from "./Styles/Themes";
import RoadMap from "./Components/Sections/RoadMap";
import ShowCase from "./Components/Sections/ShowCase";
import Team from "./Components/Sections/Team";
import { Route, Routes, useParams } from "react-router-dom";
import CategoriesPage from "./Components/Sections/CategoriesPage";
import ProductPage from "./Store/Pages/ProductPage";
import SingleProductPage from "./Store/Pages/SingleProductPage";
import Cart from "./Store/Pages/Cart";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/categories" element={<CategoriesPage />} />
          <Route exact path={`/categories/:id`} element={<ProductPage />} />
          <Route exact path={`/products/:id`} element={<SingleProductPage />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
