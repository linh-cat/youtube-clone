import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import axios from "../../service/axios";

function Index({ videoId, windowWidth, windowHeight }) {
  const [videoInfor, setVideoInfor] = useState({});

  async function fetchVideoDetail() {
    try {
      const data = await axios({
        url: `/video/detailById/${videoId}`,
        method: "GET",
        params: {
          snippet: "snippet",
          statistics: "statistics",
        },
      });

      setVideoInfor(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideoDetail();
  }, []);

  return (
    <Container>
      <ReactPlayer
        url={`https://youtu.be/${videoId}`}
        controls
        playbackRate={1}
        width="100%"
        height="70%"
        playing="true"
      />

      <ContainerInfor>
        <HashtagList>#123 #4456</HashtagList>
        <TitleOfVideo>hihihaha</TitleOfVideo>
        <InforBottom>
          <ViewAndTime>9,257,758 views - Sep 17, 2021</ViewAndTime>
          <ActionVideo>
            <Like>Like</Like>
            <Dislike>Dislike</Dislike>
            <Share>Share</Share>
            <Save>Save</Save>
          </ActionVideo>
        </InforBottom>
      </ContainerInfor>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  flex: 35%;
`;

const ContainerInfor = styled.div``;
const HashtagList = styled.div``;
const HashtagItem = styled.a``;
const TitleOfVideo = styled.h3``;

const InforBottom = styled.div``;
const ViewAndTime = styled.div``;
const ActionVideo = styled.div``;
const Like = styled.div``;
const Dislike = styled.div``;
const Share = styled.div``;
const Save = styled.div``;
