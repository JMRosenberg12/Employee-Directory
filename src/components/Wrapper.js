import React from 'react';
import "../src/styles/Wrapper.css";

function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;