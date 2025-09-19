import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Main } from "./Components/Main/Main";
function App() {
  return (
    <>
      <div className="MainContainer">
        <Navbar />
        <div className="MainContentContainer">
          <Sidebar />
          <Main/>
        </div>
      </div>
    </>
  );
}

export default App;
