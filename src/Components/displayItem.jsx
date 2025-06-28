import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contentValue,
  deleteTask,
  storeId,
  taskStatus,
} from "../../Redux/Slice";
import { useNavigate } from "react-router-dom";
import contextStore from "../../Context/contextStore";
import { motion} from "framer-motion";


const DisplayItem = (item) => {
  let { setIsEdit } = useContext(contextStore);
  let [filterBy, setFilterBy] = useState(item.show);
  let list = useSelector((state) => state.data.taskList);
  let [filterList, setFilterList] = useState(list);

  useEffect(() => {
    if (filterBy === "complete") {
      setFilterList(list.filter((task) => task.status == true));
    } else if(filterBy === "active") {
      setFilterList(list.filter((task) => task.status == false));
    } else{
      setFilterList(list);
    }
  }, [filterBy, list]);

    // let [filterData, setFilterData] = useState(list);
    // useEffect(() => {
    //   setFilterData(list.filter((task) => task.topic === category));
    // }, [category]);




  let dispatch = useDispatch();
  let navigate = useNavigate();

  let editTask = (index) => {
    dispatch(storeId(index));
    dispatch(contentValue());
    navigate("/createTask");

    setIsEdit(true);
  };

  let setStatus = (index) => {
    dispatch(storeId(index));
    dispatch(taskStatus());
  };

  let removeTask = (index) => {
    dispatch(storeId(index));
    dispatch(deleteTask());
  };

  return (<motion.div 
    initial = {{opacity:0, x:-100}}
    animate = {{opacity : 1, x :0}}
    exit= {{opacity:0, x:100}}>
  
    <div className="taskDisplay1">
      {filterList?.length == 0 ? (
        <div className="notFound1">Not Found</div>
      ) : (
        filterList.map((task, index) => (
          <div className="taskStructure" key={index}>
            <p className="taskTopic">{task.topic}</p>
            <div className="details">
              <p>
                <span>Task Name : </span>
                {task.content}
              </p>
              <p>Task Create : {task.createDate}</p>
              <p className="statusDetail">
                Status:
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

            <div className="btnContainer">
              <button onClick={() => editTask(index)} className="edit">
                Edit
              </button>
              <button onClick={() => removeTask(index)} className="delete">
                Del
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </motion.div> );
};

export default DisplayItem;
