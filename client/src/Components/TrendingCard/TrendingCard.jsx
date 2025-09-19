import React, { useRef } from "react";
import "./TrendingCard.css";
import { TrendingCardData } from "../../Config/Config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const TrendingCard = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="TrendingWrapper">
      {/* Left Scroll Button */}
      <button className="ScrollBtn left" onClick={() => scroll("left")}>
        <ChevronLeft size={24} />
      </button>

      {/* Trending Cards Container */}
      <div className="TrendingCardMainContainer" ref={scrollRef}>
        {TrendingCardData.map((item, index) => (
          <div className="CardContainer" key={index}>
            <div className="CardImageWrapper">
              <img src={item.img} alt={item.movie || "Trending"} />
              <div className="PlayBtn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="CardTextContainer">
              <h2>{item.movie}</h2>
              <p>{item.singer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button className="ScrollBtn right" onClick={() => scroll("right")}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
