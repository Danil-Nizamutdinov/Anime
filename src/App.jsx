import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AnimeList from "./components/AnimeList/AnimeList";
import Anime from "./components/Anime/Anime";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="anime" element={<AnimeList />} />
          <Route path="anime/:id" element={<Anime />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
