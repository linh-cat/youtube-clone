import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import "./Video.css";
function Video() {
  const { videoId } = useParams();
  return (
    <ReactPlayer
      url={`https://youtu.be/${videoId}`}
      controls
      playbackRate={2}
      width="896px"
      height="504px"
    />
  );
}

export default Video;
