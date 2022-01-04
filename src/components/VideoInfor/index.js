import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

function Index({ videoId, windowWidth, windowHeight }) {
  return (
    <Container>
      <ReactPlayer
        url={`https://youtu.be/${videoId}`}
        controls
        playbackRate={1}
        width="100%"
        height="70%"
      />
    </Container>
  );
}

export default Index;

const Container = styled.div`
  flex: 35%;
`;
