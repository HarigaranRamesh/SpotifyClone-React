import React from "react";
import "./Main.css";
import { Trending } from "../Trending/Trending.jsx";

import { PopularArtist } from "../PopularArtist/PopularArtist.jsx";
import { ArtistCard } from "../ArtistCard/ArtistCard.jsx";

export const Main = () => {
  return (
    <main className="MainSection">
      <Trending />
      <PopularArtist />
    </main>
  );
};
