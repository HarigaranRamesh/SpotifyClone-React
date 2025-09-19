import React from "react";
import { artists } from "../../Config/Config";
import "./ArtistCard.css";

export const ArtistCard = () => {
  return (
    <div className="popular-artists">
      <div className="artist-list">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <div className="artist-img-wrapper">
              <img
                src={artist.image}
                alt={artist.name}
                className="artist-img"
              />
            </div>

            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-role">{artist.role}</p>

            {/* Play button now directly on card */}
            <div className="play-btn">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
