import React from "react";
import icon from "../../img/icon.png";
import icon2 from "../../img/icon2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTogglerSort,
  updateTogglerAnimeTop,
  updateFetching,
  resetAnimeArray,
  resetCurrentAnimePage,
} from "../../redux/main-reducer";

function AnimeListSort() {
  const togglerSort = useSelector((state) => state.mainReducer.togglerSort);
  const dispatch = useDispatch();

  let activeClassSort = togglerSort ? "active" : "";
  let arrow = togglerSort ? icon : icon2;

  const handlerTogglerSort = () => {
    dispatch(updateTogglerSort());
  };

  const handlerSetAnimeTop = () => {
    dispatch(resetCurrentAnimePage());
    dispatch(resetAnimeArray());
    dispatch(updateTogglerAnimeTop());
    dispatch(updateTogglerSort());
    dispatch(updateFetching());
  };

  return (
    <div className="anime_sort">
      <button className="anime_sort_button" onClick={handlerTogglerSort}>
        sort
        <img src={arrow} alt="icon" />
      </button>

      <div
        className={`anime_sort_content ${
          "anime_sort_content_" + activeClassSort
        }`}
      >
        <div onClick={handlerSetAnimeTop} className="anime_sort_list_item">
          top anime
        </div>
      </div>
    </div>
  );
}

export default AnimeListSort;
