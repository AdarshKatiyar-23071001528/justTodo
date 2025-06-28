import React, { useState } from "react";

import Menu from "./menu";

const Navbar = () => {
  
  return (
    <div className="navContainer">
      <div className="navBar">
        <div className="logo">
         
          <h1>Analysis</h1>
           <p className="tagline">to you for be Perfect</p>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default Navbar;
