import React from "react";
import "./styles/Nav.css";
import "./styles/Header.css";
import 'bootstrap/dist/css/bootstrap.css'
function Navbar() {
  return (
    <nav className="">
       <h1> Employee Directory</h1>
       <p> Click on carrots to filter by heading or use the search box to narrow your result.</p>
    </nav>
  );
}

export default Navbar;