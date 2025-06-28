import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Menu = () => {

    let [isLogin, setIsLogin] = useState(false);
    return (
        
        <div className="menu">
          <Link to={"/home"}>
            <p>Home</p>
          </Link>
          <Link to={"/analysis"}>
            <p>Analysis</p>
          </Link>
          {isLogin ? (
            <p>Logout</p>
          ) : (
            <Link to={"/login"}>
              <p>Login</p>
            </Link>
          )}
        </div>
    );
}

export default Menu;
