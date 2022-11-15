import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { setCookie } from "../../Cookies/Cookies";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh-${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 80%;
  /* height: 40vh; */
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  div {
    width: 100%;
    height: 40vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ProductDescription = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  /*  */
  justify-content: space-between;
  margin-top: 70px;
  align-items: center;
  @media (max-width: 40em) {
    min-height: 50vh;
    /* flex-direction: column; */
  }
  button {
    margin-right: auto;
    margin-left: 55px;
  }
`;
const Box3 = styled.div`
  width: 30%;
  height: 100%;
  margin-top: 110px;
  border: 1px solid ${(props) => props.theme.text};
  @media (max-width: 40em) {
    width: 40%;
    margin-top: 120px;
    margin-left: 50px;
  }
  @media (max-width: 30em) {
    width: 50%;
    margin-top: 120px;
  }
`;
const Box2 = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: 60vh; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;

  /* align-items: center; */
  div {
    font-size: ${(props) => props.theme.fontsm};
    text-transform: capitalize;
    line-height: 2.5;
    letter-spacing: 2px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
  letter-spacing: 5px;
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  width: 80%;
  letter-spacing: 2px;

  color: ${(props) => props.theme.text};
  align-self: flex-start;
  line-height: 2.5;
  margin: 3rem auto;
  /* margin-left: 2rem; */
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const CartButton = styled.button`
  display: inline-block;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  width: 80%;

  outline: none;
  border: 2px solid ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  padding: 20px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  margin-top: 20px;
  margin-left: 26px;
  margin-bottom: 20px;
  @media (max-width: 64em) {
    padding: 5px 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  @media (max-width: 30em) {
    margin-left: 0;
    font-size: ${(props) => props.theme.fontxs};
    width: 100%;
  }
`;
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
    setProduct((prev) => ({
      ...prev,
      Product_id: id,
      Product_Name: data?.title,
      Product_price: data?.price,
      PRoduct_image: data?.image_url,
    }));
  }, []);
  const handleCart = () => {
    setCookie("product", JSON.stringify(product));
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
            <img src={data?.image_url} alt="" />
          </div>
          {/* <div>
            {" "}
            <img src="/images/nonfungible-token-nft.jpg" alt="" />
          </div> */}
        </Slider>
      </Container>
      <ProductTitle>{data?.title}</ProductTitle>
      <ProductDescription>
        <Box>
          <SubTextLight>{data?.descripiton}</SubTextLight>
        </Box>
        <Box3>
          <Box2>
            <div>
              <div>Price</div>
              <div>Total Quantity</div>
            </div>
            <div>
              <div>${data?.price}</div>
              <div>{data?.quantity}</div>
            </div>
          </Box2>
          <CartButton onClick={handleCart}>Add To Cart</CartButton>
        </Box3>
      </ProductDescription>
    </Section>
  );
};

export default SingleProductPage;
