import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAnimeSearchText,
  setAnimeSearch,
  updateTogglerSearch,
} from "../../redux/main-reducer";
import { NavLink } from "react-router-dom";

function ModalSearch() {
  const serchText = useSelector((state) => state.mainReducer.animeSearchText);
  const animeSearch = useSelector((state) => state.mainReducer.animeSearch);
  const togglerSearch = useSelector((state) => state.mainReducer.togglerSearch);
  const dispatch = useDispatch();

  let activeClassModal = togglerSearch ? "active" : "";

  const updateSearchText = (event) => {
    let text = event.target.value;
    dispatch(updateAnimeSearchText(text));
  };

  const handlerTogglerSearch = () => {
    dispatch(updateTogglerSearch());
  };

  useEffect(() => {
    dispatch(setAnimeSearch({ page: 1, q: serchText, limit: 5 }));
  }, [serchText]);

  return (
    <div
      className={`modal_search ${"modal_search_" + activeClassModal}`}
      onClick={handlerTogglerSearch}
    >
      <div
        className={`search_popup ${"search_popup_" + activeClassModal}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search">
          <input
            type="text"
            className="search_input"
            placeholder="search anime"
            onChange={updateSearchText}
            value={serchText}
          />
        </div>
        <div className="search_result">
          {animeSearch != null
            ? animeSearch.map((a, index) => (
                <NavLink
                  className="search_result_content"
                  key={index}
                  to={`${"anime/" + a?.mal_id}`}
                  onClick={handlerTogglerSearch}
                >
                  <div className="search_result_img">
                    <img src={a?.images?.jpg.small_image_url} alt="anime" />
                  </div>
                  <div className="search_result_title">{a?.title}</div>
                </NavLink>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ModalSearch;
