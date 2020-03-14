import React from 'react';
import "../styles/Wrapper.css";
import 'bootstrap/dist/css/bootstrap.css'

function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;