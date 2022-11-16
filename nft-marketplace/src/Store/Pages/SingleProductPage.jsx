import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../../Cookies/Cookies";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh-${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 80%;
  height: 40vh;
  margin: 0 auto;
  margin-bottom: 30px;
  div {
    width: 100%;
    height: 40vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const settings = {
  dots: true,
  infinite: true,
  //   speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const SingleProductPage = () => {
  const [data, setData] = useState({});
  const [product, setProduct] = useState({});

  const URL = `https://ecommercetestproject.herokuapp.com/api`;
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(`${URL}/products/${id}`);

        setData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, []);
  useEffect(() => {
    setProduct((prev) => ({
      ...prev,
      Product_id: id,
      Product_Name: data?.title,
      Product_price: data?.price,
      PRoduct_image: data?.image_url,
      Product_quantity: 1,
    }));
  }, [data]);
  const localData = getCookie("product") && JSON.parse(getCookie("product"));
  const handleCart = () => {
    let newCartItems;
    if (localData) {
      newCartItems = [...localData, product];
    } else {
      newCartItems = [product];
    }
    setCookie("product", JSON.stringify(newCartItems));
    navigate("/cart");
  };

  const settings = {
    dots: true,
    infinite: true,
    //   speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Container>
        <Slider {...settings}>
          <div>
            <img src="/images/nft_1320x742.jpeg" alt="" />
          </div>
          <div>
            {" "}
            <img src="/images/nonfungible-token-nft.jpg" alt="" />
          </div>
        </Slider>
      </Container>
    </Section>
  );
};

export default SingleProductPage;
