import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gif from '../assests/img.gif';

const Greet = () => {
  let navigate = useNavigate();
  let [userName, setUserName] = useState("Adarsh");

  setTimeout(() => {
    navigate("/home");
  }, 3200);

  return (


    
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div className="greet">
        <p className="analysis">Analysis Your Growth</p>
        <div className="flag">
          <img src={gif}></img>
        </div>
        <h2>Jai Hind</h2>
        <p className="loading">Loading...</p>
      </div>
    </motion.div>
  );
};

export default Greet;
