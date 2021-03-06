import React from "react";
import "../styles/Search.css";
import 'bootstrap/dist/css/bootstrap.css'

function Search({ handleSearchChange }) {
  return (
    <br></br>,
    <div className="searchbox-lg">
      <form className="form-inline-lg">
        <input
          className="form-control form-control-lg"
          type="search-lg"
          placeholder="Search Employees..."
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
      <br></br><br></br>
    </div>
  );
}
export default Search;