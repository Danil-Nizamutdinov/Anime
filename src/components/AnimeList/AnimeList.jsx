import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAnime,
  setAnimeTop,
  updateFetching,
  updateCurrentAnimePage,
} from "../../redux/main-reducer";
import AnimeListSort from "./AnimeListSort";
import { NavLink } from "react-router-dom";

function AnimeList() {
  const anime = useSelector((state) => state.mainReducer.anime);
  const fetching = useSelector((state) => state.mainReducer.fetching);
  const togglerSearch = useSelector((state) => state.mainReducer.togglerSearch);
  const togglerAnimeTop = useSelector(
    (state) => state.mainReducer.togglerAnimeTop
  );

  const currentPage = useSelector(
    (state) => state.mainReducer.currentAnimePage
  );

  let activeClassModal = togglerSearch ? "active" : "";

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      if (togglerAnimeTop) {
        dispatch(setAnimeTop(currentPage));
        dispatch(updateCurrentAnimePage());
      } else {
        dispatch(setAnime({ page: currentPage }));
        dispatch(updateCurrentAnimePage());
      }
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(updateFetching());
    }
  };

  return (
    <section className="anime">
      <div>
        <h1 className="anime_katalog">Catalog</h1>
        <AnimeListSort />
      </div>
      <div className="anime_list">
        {anime != null
          ? anime.map((a, index) => (
              <NavLink
                key={index}
                className={`anime_list_content ${
                  "anime_list_content_" + activeClassModal
                }`}
                to={`${a.mal_id}`}
              >
                <img
                  src={a.images?.jpg.image_url}
                  alt="anime"
                  className="anime_list_img"
                />

                <h1 className="anime_list_title">{a.title}</h1>
                <span className="anime_score">{a.score}</span>
              </NavLink>
            ))
          : ""}
      </div>
    </section>
  );
}

export default AnimeList;
