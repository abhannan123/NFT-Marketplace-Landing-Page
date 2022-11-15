import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";
import Categories from "./Categories";
import { Link } from "react-router-dom";

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
  @media (max-width: 70em) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  const URL = `https://ecommercetestproject.herokuapp.com/api`;

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${URL}/categories`);

        setCategories(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  // useEffect(()=>{
  //   categories.map(())
  // },[categories])
  // const images = [
  //   "images/download.jpeg",
  //   "images/download.jpeg",
  //   "images/download.jpeg",
  //   "images/download.jpeg",
  //   "images/download.jpeg",
  // ];
  return (
    <Container>
      {categories.map((data) => (
        <Link to={`/categories/${data?.id}`}>
          <Categories
            img={"/images/resource-database-hXh9yUI1rho-unsplash.jpg"}
            name={data?.name}
            id={data?.id}
          />
        </Link>
      ))}
    </Container>
  );
};

export default CategoriesPage;
