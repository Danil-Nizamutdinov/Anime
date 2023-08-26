import React from "react";
import search from "../../img/search.png";
import { updateTogglerSearch } from "../../redux/main-reducer";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  const handlerTogglerSearch = () => {
    dispatch(updateTogglerSearch());
  };

  return (
    <div className="search_button" onClick={handlerTogglerSearch}>
      <div className="search_button_img">
        <img src={search} alt="sss" />
      </div>
      <div>поиск</div>
    </div>
  );
}

export default Search;
