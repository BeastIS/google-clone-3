import React from "react";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";

import { useStateValue } from "../../providers/StateProvider";
// import Response from "../../static/response";
import GoogleLogo from "../../assets/search_logo.png";
import SearchBody from "../../components/search/search";
import useGoogleSearch from "../../hooks/useGoogleSearch";

// CSS Style
import "./Search.scss";

function Search() {
  const [{ term }, dispatch] = useStateValue();

  // API Live Call results
  const { data } = useGoogleSearch(term);

  // Mock API Static results
  // const data = Response;

  console.log(data);
  return (
    <div className="SearchPage">
      <div className="Header">
        <Link to="/">
          <img src={GoogleLogo} className="logo" alt="Google Logo" />
        </Link>
        <div className="body">
          <SearchBody hideButtons />
          <div className="options">
            <div className="left">
              <Link className="item" to="/all">
                <SearchRoundedIcon />
                All
              </Link>
              <Link className="item" to="images">
                <ImageRoundedIcon />
                Images
              </Link>
              <Link className="item" to="/news">
                <DescriptionRoundedIcon />
                News
              </Link>
              <Link className="item" to="/shoping">
                <LocalOfferRoundedIcon />
                Shopping
              </Link>
              <Link className="item" to="/maps">
                <RoomRoundedIcon />
                Maps
              </Link>
              <Link className="item" to="/more">
                <MoreVertRoundedIcon />
                More
              </Link>
            </div>
            <div className="right">
              <Link className="item" to="/settings">
                Settings
              </Link>
              <Link className="item" to="/tools">
                Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="results">
          <p className="counts">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="result" key={item.title}>
              <a className="link" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="small-image"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}▾
              </a>
              <a className="title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
