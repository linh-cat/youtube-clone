import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoRow from "../VideoRow/VideoRow";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import Axios from "axios";

function SearchPage() {
  const [videos, setVideos] = useState([]);
  let params = useParams();

  useEffect(() => {
    async function fetchData() {
      const url = "https://www.googleapis.com/youtube/v3";
      const API_KEY = "AIzaSyAYdOYFZ1LfPTTB9bBitCviGR4TU-DeX5s";

      const request = await Axios(
        `${url}/search?part=snippet&maxResults=25&q=${params.searchQuery}&key=${API_KEY}`
      );
      setVideos(request.data.items);
      console.log(request.data.items[0].id);
      return request;
    }
    fetchData();

    // console.log(params.searchQuery);
  }, [params.searchQuery]);
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {videos.map((video) => (
        <VideoRow
          key={video.id.videoId && video.id.channelId}
          image={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
          channel={video.channel}
          subs="155k"
          views="4.3M"
          timestamp={video.snippet.publishedAt}
          description={video.snippet.description}
        />
        // <VideoRow
        //   key={video.id.videoId}
        //   image="http://i3.ytimg.com/vi/j4HZSK4qZtk/hqdefault.jpg"
        //   title="Suboi, Binz, Karik, Wowy tung nón vàng tước quyền Rhymastic, JustaTee vì siêu thí sinh | RAP VIỆT"
        //   channel="Vie Channel - HTV2 [ RAP VIỆT Official ]"
        //   subs="155k"
        //   views="4.3M"
        //   timestamp="14 hours ago"
        //   description="
        // RapViệt #Rap_Việt #VieChannelHTV2 #VieGiảiTrí Đón xem Rap Việt lúc 20H Thứ 7 - 01/08/2020 trên kênh truyền hình Vie ...
        // New"
        // />
      ))}
    </div>
  );
}

export default SearchPage;
