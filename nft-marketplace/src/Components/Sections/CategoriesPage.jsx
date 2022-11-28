import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import { doGet } from "../../api/httpRequest";

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */

  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */
  @media (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);

    width: 90%;
  }
  @media (max-width: 48em) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 30em) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  const { data } = useFetch(
    "https://ecommercetestproject.herokuapp.com/api/categories"
  );

  useEffect(() => {
    setCategories(data);
  }, [data]);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ecommercetestproject.herokuapp.com/api/categories"
  //       );
  //       setCategories(response?.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProducts();
  // }, []);

  const images = [
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
  ];
  return (
    <Container>
      {categories.map((img) => (
        <Link to={`/categories/${img?.id}`}>
          <Categories
            img={"/images/resource-database-hXh9yUI1rho-unsplash.jpg"}
            name={img?.name}
            id={img?.id}
          />
        </Link>
      ))}
    </Container>
  );
};

export default CategoriesPage;
