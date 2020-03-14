import React from "react";
import Search from "./Search";
import "../styles/Nav.css";

function NavBar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand bg-success">
      <div className="navbar-collapse row" id="navbarNav">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default NavBar;