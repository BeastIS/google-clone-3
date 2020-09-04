import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Button } from "@material-ui/core";

import Mic from "../../assets/mic.svg";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../providers/reducer";

import "./search.scss";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setinput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("🔍 you hit the search button : ", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="input">
        <SearchRoundedIcon className="search-icon" />
        <input value={input} onChange={(e) => setinput(e.target.value)} />
        <img src={Mic} className="mic-icon" alt="mic icon" />
      </div>

      {!hideButtons ? (
        <div className="buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="buttons">
          <Button
            type="submit"
            className="button-hidden"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="button-hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
