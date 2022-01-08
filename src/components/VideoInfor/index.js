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

function Index({ videoId, windowWidth, windowHeight, channelId }) {
  const [videoInfor, setVideoInfor] = useState({});
  const [videoCount, setVideoCount] = useState({});
  const [channelInfor, setChannelInfor] = useState({});
  const [channelCount, setChannelCount] = useState({});

  async function fetchVideoDetail() {
    try {
      const data = await axios({
        url: `/video/detailById/${videoId}/${channelId}`,
        method: "GET",
        params: {
          snippet: "snippet",
          statistics: "statistics",
        },
      });
      setVideoInfor(data.data.videoData[0].snippet);
      setVideoCount(data.data.videoData[0].statistics);

      setChannelInfor(data.data.channelData[0].snippet);
      setChannelCount(data.data.channelData[0].statistics);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideoDetail();
  }, []);

  const date_publish = new Date(videoInfor.publishedAt);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

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
      {/* video */}
      <ContainerInfor>
        <HashtagList>
          <HashtagItem>#456</HashtagItem>
          <HashtagItem>#4789</HashtagItem>
        </HashtagList>
        <TitleOfVideo>{videoInfor.title}</TitleOfVideo>

        <InforBottom>
          <ViewAndTime>
            {formatNumber(Number(videoCount.viewCount))} views -{" "}
            {date_publish.toDateString()}
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

      {/* channel */}
      <ChannelInfor>
        <Channel>
          <Avatar alt="Remy Sharp" src="" />
          <ChannelContent>
            <ChannelTitle>{channelInfor.title}</ChannelTitle>
            <SubscribeCount>
              {formatNumber(Number(channelCount.subscriberCount))} Subscribers
            </SubscribeCount>
          </ChannelContent>
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
const ChannelInfor = styled.div`
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Channel = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const BtnSubscribe = styled.div`
  background-color: #ce4119;
  padding: 10px 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
const ChannelContent = styled.div``;
const ChannelTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 5px;
`;
const SubscribeCount = styled.div`
  font-size: 14px;
  color: #a5a5a5;
`;
