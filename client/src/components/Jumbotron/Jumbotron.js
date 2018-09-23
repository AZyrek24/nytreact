import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  // Main Bootstrap Jumbotron 
  <div>
    {/* Jumbotron for Title */}
    <div className="jumbotron">
      <h1 className="text-center">
        <strong>
          <i className="fa fa-newspaper-o"></i>{ children }</strong>
      </h1>
    </div>
  </div>
);

export default Jumbotron;