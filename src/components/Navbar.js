import React from "react";
import Search from "./Search";


function NavBar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-collapse row" id="navbarNav">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default NavBar;