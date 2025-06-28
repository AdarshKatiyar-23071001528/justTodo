import { AnimatePresence } from "framer-motion";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Analysis from "./Components/analysis";
import Login from "./Components/login";
import Create from "./Components/Create";
import Navbar from "./Components/navbar";
const Greet = lazy(() => import("./Components/greet"));
const Home = lazy(() => import("./Components/Home"));

const AnimatedRoutes = () =>{
   const location = useLocation();
   return (
    <AnimatePresence mode="wait">
      <div>
          <Suspense fallback={<p>Loading....</p>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Greet />} />
              <Route path="/home" element={<Home />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/login" element={<Login />} />
              <Route path ="/createTask" element={<Create/>} />
            </Routes>
          </Suspense>
      </div>
    </AnimatePresence>
  );
}



const App = () =>{
  return (
    <Router>
       <Navbar/>
      <AnimatedRoutes/>
    </Router>
  )
}
 

export default App;
