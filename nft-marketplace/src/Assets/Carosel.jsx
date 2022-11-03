import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
const Carosel = () => {
  const Container = styled.div`
    width: 25vw;
    height: 70vh;
    .swiper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-color: ${(props) => props.theme.carouselColor};
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-button-next{
        color:${(props) => props.theme.text};
        right:0;
        top:50%;
        width:2rem;
        background-image:url("/images/Arrow.svg");
        background-position:center;
        background-size:cover;
        &:after{
            display:none;

        }

    }
    .swiper-button-prev{
        color:${(props) => props.theme.text}
        left:0;
        top:50%;
        width:2rem;
        transform:rotate(180deg);
        background-image:url("/images/Arrow.svg");
        background-position:center;
        background-size:cover;
        &:after{
            display:none;

        }

    }
  `;
  return (
    <Container>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ type: "fraction" }}
        navigation={true}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="/images/Nfts/bighead-1.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-2.svg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/Nfts/bighead-3.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-4.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-5.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-6.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-7.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-8.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-9.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nfts/bighead-10.svg" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carosel;
