import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentAnime } from "../../redux/main-reducer";
import AnimeInfo from "./AnimeInfo";
import AnimeTrailer from "./AnimeTrailer";

function Anime() {
  const anime = useSelector((state) => state.mainReducer.currentAnime);
  const dispatch = useDispatch();

  let { id } = useParams();

  const {
    aired,
    status,
    rating,
    rank,
    year,
    popularity,
    season,
    duration,
    title,
    trailer,
    images,
    synopsis,
  } = anime;

  useEffect(() => {
    dispatch(setCurrentAnime(id));
  }, [id]);

  return (
    <section className="anime_page">
      <div className="anime_page_content">
        <div className="anime_page_img">
          <img src={images?.jpg.large_image_url} alt="anime" />
        </div>
        <div className="anime_page_info">
          <h1 className="anime_page_title">{title}</h1>
          <AnimeInfo title="aired" info={aired?.string} />
          <AnimeInfo title="rating" info={rating} />
          <AnimeInfo title="rank" info={rank} />
          <AnimeInfo title="year" info={year} />
          <AnimeInfo title="popularity" info={popularity} />
          <AnimeInfo title="season" info={season} />
          <AnimeInfo title="duration" info={duration} />
          <AnimeInfo title="status" info={status} />
        </div>
      </div>
      <div className="anime_page_description">
        <h1 className="anime_page_title">Description</h1>
        <p>{synopsis}</p>
      </div>
      <AnimeTrailer trailer={trailer?.embed_url} />
    </section>
  );
}

export default Anime;
