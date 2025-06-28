import React, { useState } from "react";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import ActiveAnalysis from "./ActiveAnalysis";
import CompleteAnalysis from "./CompleteAnalysis";
import GraphAnalysis from './graphAnalysis';
const Analysis = () => {
  let dispatch = useDispatch();
  let category = useSelector((state) => state.data.categoryValue);
  let [Status, setStatus] = useState("active");

  return (
    <>
      <div className="analyticsContainer">
        <div className="analytics">
          {/* <div className="head">
          <h1>Analysis</h1>
        </div> */}

          <div className="filter">
            <p>Select Topic:</p>
            <Category />
            <p className="searchIcon" onClick={() => handleSearch()}>
              <span className="material-symbols-outlined">search</span>
            </p>
          </div>
        </div>
        <div className="taskDivider">
          <div className="dividerHead">
            <p
              onClick={() => setStatus("active")}
              className={Status === "active" ? "active" : ""}
            >
              Active
            </p>
            <p
              onClick={() => setStatus("complete")}
              className={Status === "complete" ? "active" : ""}
            >
              Complete
            </p>
          </div>
          <div className="displayItems">
            {Status === "active" ? <ActiveAnalysis /> : <CompleteAnalysis />}
          </div>
        </div>
      </div>
      <GraphAnalysis/>
    </>
  );
};

export default Analysis;
