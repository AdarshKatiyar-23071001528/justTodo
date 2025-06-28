
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const DisplayAnalysis = (item) => {
  let category = useSelector((state) => state.data.categoryValue);
  let list = useSelector((state) => state.data.taskList);
  let [filterData, setFilterData] = useState(list);
  useEffect(() => {
    setFilterData(list.filter((task) => task.topic === category));
  }, [category]);

  let [filterBy, setFilterBy] = useState(item.show);
  let [filterList, setFilterList] = useState();

  useEffect(() => {
    if (filterBy === "complete") {
      setFilterList(filterData.filter((task) => task.status == true));
    } else if (filterBy === "active") {
      setFilterList(filterData.filter((task) => task.status == false));
    }
  }, [filterBy, filterData]);


  return ( <motion.div initial={{x:-100, opacity:0}}
  animate={{x:0,opacity:1}}
  exit={{x:100, opacity:0}}>
    <div className="displayItems flex justify-center  h-[60vh]" >
      {(filterList?.length == 0) ? (
        <div className="notFound">Not Found</div>
      ) : (
        filterList?.map((task, index) => (
          <div
            className="taskStructure"
            key={index}
            style={{ justifyContent: "space-around" }}
          >
            <p className="taskTopic">{task.topic}</p>
            <div className="details">
              <p>
                <span>Task Name : </span>
                {task.content}
              </p>
              <p>Task Create : {task.createDate}</p>
              <p className="statusDetail">
                Status :{" "}
                {task.status ? (
                  <li style={{ color: "green" }}>Complete</li>
                ) : (
                  <li style={{ color: "red" }}>Pending</li>
                )}
                <li className="statusMark" onClick={() => setStatus(index)}>
                  ✔
                </li>
              </p>
            </div>
          </div>
        ))
      )}
    </div></motion.div>
  );
};

export default DisplayAnalysis;
