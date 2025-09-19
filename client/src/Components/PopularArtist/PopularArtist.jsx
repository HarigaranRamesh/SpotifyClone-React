import React from "react";
import "./PopularArtist.css";
import { ArtistCard } from "../ArtistCard/ArtistCard";
export const PopularArtist = () => {
  return (
    <div className="PopularArtistMainContainer">
      <h1>PopularArtists</h1>
      <ArtistCard />
    </div>
  );
};
