import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import FaceIcon from "@material-ui/icons/Face";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/youtube/youtube_PNG21.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <FaceIcon />
      </div>
    </div>
  );
}

export default Header;
