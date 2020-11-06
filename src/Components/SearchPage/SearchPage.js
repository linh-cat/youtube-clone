import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoRow from "../VideoRow/VideoRow";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import axios from "../../FetchAPI/axios";

function SearchPage() {
  const [videos, setVideos] = useState([]);
  let params = useParams();

  useEffect(() => {
    async function fetchData() {
      const API_KEY = "AIzaSyCxcVw8a5uDuiSvH7PA2Zr6ypmkTBZUX4w";

      const request = await axios(
        `/search?part=snippet&maxResults=20&q=${params.searchQuery}&key=${API_KEY}`
      );
      setVideos(request.data.items);
      // console.log(request.data.items[0].id);
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
      ))}
    </div>
  );
}

export default SearchPage;
