import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Avatar from "@material-ui/core/Avatar";

import axios from "../../service/axios";

// icon
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SaveAltOutlinedIcon from "@material-ui/icons/SaveAltOutlined";

function Index({ videoId, windowWidth, windowHeight }) {
  const [videoInfor, setVideoInfor] = useState({});
  const [videoCount, setVideoCount] = useState({});

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
      setVideoInfor(data.data[0].snippet);
      setVideoCount(data.data[0].statistics);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideoDetail();
  }, []);

  const date_publish = new Date(videoInfor.publishedAt);
  console.log(videoInfor);

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
        <HashtagList>
          <HashtagItem>#456</HashtagItem>
          <HashtagItem>#4789</HashtagItem>
        </HashtagList>
        <TitleOfVideo>{videoInfor.title}</TitleOfVideo>

        <InforBottom>
          <ViewAndTime>
            {videoCount.viewCount} views - {date_publish.toDateString()}
          </ViewAndTime>
          <ActionVideo>
            <ActionItem>
              <ThumbUpAltOutlinedIcon />
              <Text>Like</Text>
            </ActionItem>
            <ActionItem>
              <ThumbDownAltOutlinedIcon />
              <Text>Dislike</Text>
            </ActionItem>
            <ActionItem>
              <ShareOutlinedIcon />
              <Text>Share</Text>
            </ActionItem>
            <ActionItem>
              <SaveAltOutlinedIcon />
              <Text>Save</Text>
            </ActionItem>
          </ActionVideo>
        </InforBottom>
      </ContainerInfor>
      <ChannelInfor>
        <Channel>
          <Avatar alt="Remy Sharp" src="" />
          <ChannelContent>hihi</ChannelContent>
        </Channel>
        <BtnSubscribe>Subscribe</BtnSubscribe>
      </ChannelInfor>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  flex: 35%;
`;

const ContainerInfor = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid #323232;
  padding-bottom: 20px;
`;
const HashtagList = styled.div``;
const HashtagItem = styled.a`
  color: #3b9aec;
`;
const TitleOfVideo = styled.h3`
  font-size: 25px;
  margin-top: 5px;
`;

const InforBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
const ViewAndTime = styled.div`
  color: #a5a5a5;
`;
const ActionVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
`;
const ActionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
`;
const Text = styled.div``;
const ChannelInfor = styled.div``;
const Channel = styled.div``;
const BtnSubscribe = styled.div``;
const ChannelContent = styled.div``;
