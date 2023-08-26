/* eslint-disable react/prop-types */
import React from "react";

function AnimeTrailer(props) {
  const { trailer } = props;

  return (
    <div className="anime_page_trailer">
      {trailer ? (
        <iframe
          src={trailer}
          className="trailer"
          title="Inline Frame Example"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <h3>Trailer not available</h3>
      )}
    </div>
  );
}

export default AnimeTrailer;
