import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img src={image} className="videoCard__thumbnail" alt="" />
      <div className="videoCard__infor">
        <Avatar className="videoCard__avatar" alt="" src={channelImage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p className="videoCard__channel">{channel}</p>
          <p>
            {views} + {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
