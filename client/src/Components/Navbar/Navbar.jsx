import React from "react";
import "./Navbar.css";
import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdLibraryMusic } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FaSpotify className="logo" />
        <FaHome className="home-icon" />
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="What do you want to play?" />
          <MdLibraryMusic className="browse-icon" />
        </div>
      </div>

      <div className="navbar-right">
        <a href="#">Premium</a>
        <a href="#">Support</a>
        <a href="#">Download</a>
        <span className="divider"></span>
        <a href="#">
          <FiDownload /> Install App
        </a>
        <a href="#">Sign up</a>
        <button className="login-btn">Log in</button>
      </div>
    </div>
  );
};
