import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

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
