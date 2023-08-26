/* eslint-disable react/prop-types */
import React from "react";

function AnimeInfo(props) {
  const { title, info } = props;

  return (
    <div className="anime_page_info_item">
      <span>{title}</span>
      <span>{info}</span>
    </div>
  );
}

export default AnimeInfo;
