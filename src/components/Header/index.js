import React, { useState } from "react";
import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Avatar from "@material-ui/core/Avatar";

function Index({ navbar, setNavbar }) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <Container>
      <HeaderLeft className="header__left">
        <MenuIcon onClick={() => setNavbar(!navbar)} className="menu" />
        <Link to="/">
          <LogoIcon src={Logo} alt="logo youtube" />
        </Link>
      </HeaderLeft>
      <HeaderInput>
        <input
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <ButtonSearch to={`/search/${inputSearch}`}>
          <SearchIcon />
        </ButtonSearch>
      </HeaderInput>
      <IconGroup>
        <Avatar src="" alt="avatar" />
      </IconGroup>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  height: 70px;
  width: 100%;
  background-color: #202020;

  .MuiSvgIcon-root {
    color: white;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  column-gap: 10px;
  .menu {
    cursor: pointer;
  }
`;
const LogoIcon = styled.img`
  width: 100px;
  height: 30px;
`;
const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 35px;

  input {
    flex: 1;
    border: none;
    height: 100%;
    background-color: #000;
    padding: 0px 7px;
    color: white;
    font-size: 16px;
    &:focus {
      outline-style: outset;
      outline-color: red;
    }
    &::placeholder {
      font-size: 16px;
    }
  }
`;

const ButtonSearch = styled.button`
  background: #323232;
  border: none;
  width: 50px;
  height: 100%;
`;

const IconGroup = styled.div``;
