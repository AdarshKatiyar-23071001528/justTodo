
import { motion } from "framer-motion";
import Alltask from "./Alltask";

const Home = () => {

  return (<>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Alltask/>
    </motion.div></>
  );
};

export default Home;
