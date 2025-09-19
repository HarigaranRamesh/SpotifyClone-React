import React from "react";
import "./Sidebar.css";
import { Globe } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="library-header">
        <h2>Your Library</h2>
        <span className="plus">+</span>
      </div>

      <div className="sidebar-card">
        <h3>Create your first playlist</h3>
        <p>It’s easy, we’ll help you</p>
        <button className="sidebar-btn">Create playlist</button>
      </div>

      <div className="sidebar-card">
        <h3>Let’s find some podcasts to follow</h3>
        <p>We’ll keep you updated on new episodes</p>
        <button className="sidebar-btn">Browse podcasts</button>
      </div>

      <div className="sidebar-footer">
        <span>Legal</span>
        <span>Safety & Privacy Center</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
        <br></br>
        <span>About Ads</span>
        <span>Accessibility</span>
        <a href="">Cookies</a>
      </div>

      <button className="lang-btn">
        <Globe size={16} />
        English
      </button>
    </div>
  );
};
