import React, { useContext, useState } from "react";
import All from "./All";
import { useNavigate } from "react-router-dom";
import Active from "./Active";
import Completed from "./Completed";
import { useDispatch } from "react-redux";
import { revokeAdd } from "../../Redux/Slice";
import contextStore from "../../Context/contextStore";

const Alltask = () => {
  let {setIsEdit} = useContext(contextStore);
  let dispatch = useDispatch();
  let [taskStatus, setTaskStatus] = useState("All");
  let handleClick = (e) => {
    setTaskStatus(e.target.textContent);
  };
    let navigate = useNavigate();
    let setAdd = () =>{
      navigate('/createTask');
      dispatch(revokeAdd());
      setIsEdit(false);
    }
  return (
    <div className="allTask">
      <div className="taskHead">
        <p>Task</p>
        <button onClick={() => setAdd()}>+</button>
      </div>
      <div className="taskStore">
        <div className="taskContainer">
          <p
            onClick={handleClick}
            className={taskStatus === "All" ? "active" : ""}
          >
            All
          </p>
          <p
            onClick={handleClick}
            className={taskStatus === "Active" ? "active" : ""}
          >
            Active
          </p>
          <p
            onClick={handleClick}
            className={taskStatus === "Completed" ? "active" : ""}
          >
            Completed
          </p>
        </div>
        <div className="taskShow">
          {taskStatus === "All"
            ? <All/>
            : taskStatus === "Active"
            ? <Active/>
            : <Completed/>}
        </div>
      </div>
    </div>
  );
};

export default Alltask;
