import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import useWindowDimensions from "../../../hook/useWindowDimensions";

import VideoInfor from "../../../components/VideoInfor";
import RecommendVideo from "../../../components/RecommendVideo";

function Index() {
  const { videoId } = useParams();

  const { height, width } = useWindowDimensions();

  return (
    <Container width={width} height={height}>
      <VideoInfor videoId={videoId} windowWidth={width} windowHeight={height} />
      <RecommendVideo />
    </Container>
  );
}

export default Index;

const Container = styled.div`
  width: ${(props) => props.width}px;
  height: calc(${(props) => props.height}px);

  display: flex;
  background-color: #181818;
  padding: 15px 20px;
`;
