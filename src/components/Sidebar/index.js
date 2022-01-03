import React from "react";

import styled from "styled-components";

import SidebarRow from "../SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExploreIcon from "@material-ui/icons/Explore";

function Index() {
  return (
    <Container>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subcription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="See more" />
      <hr />
    </Container>
  );
}

export default Index;

const Container = styled.div`
  background-color: #202020;
  height: calc(100vh - 70px);
  width: 300px;
`;
