import React from "react";
import "./Trending.css";
import { TrendingCard } from "../TrendingCard/TrendingCard";
export const Trending = () => {
  return (
    <div className="TrendingMainContainer">
      <span>Trending songs</span>

      <TrendingCard />
    </div>
  );
};
