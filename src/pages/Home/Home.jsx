import React from "react";
import { Link } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import GoogleLogo from "../../assets/google-logo.png";
import Search from "../../components/search/search";

// CSS Style
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="header__left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header__right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar>A</Avatar>
        </div>
      </div>
      <div className="body">
        <img src={GoogleLogo} className="logo" alt="Google" />
        <div className="body__input">
          <Search />
        </div>
      </div>
      <div className="footer">
        <span>India</span>
      </div>
    </div>
  );
}

export default Home;
