import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../../cookies/Cookies";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginModal } from "../actions/models";

const CartSection = styled.div`
  width: 85%;
  margin: auto;
`;
const Section = styled.section`
  /* min-height: ${(props) => `calc(100vh-${props.theme.navHeight})`}; */
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 80%;

  /* margin: 0 auto; */
  margin-bottom: 30px;
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
const ProductTitle = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  letter-spacing: 2px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  /* margin-left: 70px; */
  div {
    margin-top: 20px;
  }
  @media (max-width: 30em) {
    margin-left: 10px;
  }
`;
const ContainerBox = styled.div`
  width: 100%;
  /* height: 100%; */
  /* margin: 0 auto; */

  display: flex;
  @media (max-width: 30em) {
    flex-direction: column;
  }
`;
const DescriptionBox = styled.div`
  width: 50%;
  padding: 30px;
  /* display: flex; */
  @media (max-width: 30em) {
    width: 80%;
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  width: 80%;
  letter-spacing: 2px;

  color: ${(props) => props.theme.text};
  align-self: flex-start;
  line-height: 2.5;
  margin: 1rem auto;
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
const ProductBox = styled.div`
  width: 20%;
  /* height: 100%; */
  margin-top: 50px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.text};
  padding: 30px;
  div {
    display: flex;
    justify-content: space-between;
  }
  span {
    /* line-height: 20px; */
    letter-spacing: 3px;
    margin-top: 20px;
  }
  @media (max-width: 64em) {
    width: 30%;
  }
  @media (max-width: 30em) {
    width: 70%;
    margin: 0 auto;
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
  margin-top: 40px;
  margin-left: 26px;
  /* margin-bottom: 20px; */
  @media (max-width: 64em) {
    padding: 5px 5px;
    margin-top: 15px;
    /* margin-bottom: 5px; */
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
  const user = getCookie("user") && JSON.parse(getCookie("user"));
  const URL = `https://ecommercetestproject.herokuapp.com/api`;
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoginOpen, isSignUpOpen, isLogout } = useSelector((state) => state);

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLoginToggle = () => {
    dispatch(loginModal(!isLoginOpen));

    //handleCustomMenuClose()
  };
  const localData = getCookie("product") && JSON.parse(getCookie("product"));
  const handleCart = () => {
    let newCartItems;
    if (localData) {
      newCartItems = [...localData, product];
    } else {
      newCartItems = [product];
    }
    if (user) {
      setCookie("product", JSON.stringify(newCartItems));
      navigate("/cart");
    } else {
      toast.error("please Login First");
      handleLoginToggle();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    //   speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CartSection>
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
        <ContainerBox>
          <DescriptionBox>
            <ProductTitle>{data?.title}</ProductTitle>
            <SubTextLight>{data?.descripiton}</SubTextLight>
          </DescriptionBox>
          <ProductBox>
            <div>
              <span> Quantity</span>
              <span>{data?.quantity}</span>
            </div>
            <div>
              <span>Price</span>
              <span>$ {data?.price}</span>
            </div>

            <CartButton onClick={handleCart}>Add To Cart</CartButton>
          </ProductBox>
        </ContainerBox>
      </Section>
    </CartSection>
  );
};

export default SingleProductPage;
