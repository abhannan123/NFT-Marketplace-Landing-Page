import React from "react";
import styled from "styled-components";
import HomePic from "./GIF.gif";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CoverVideo = () => {
  const VideoContainer = styled.div`
    width: 100%;
    video {
      width: 100%;
      height: auto;
    }
  `;

  return (
    <VideoContainer>
      <img src="images/Home GIF.gif" />
    </VideoContainer>
  );
};

export default CoverVideo;
