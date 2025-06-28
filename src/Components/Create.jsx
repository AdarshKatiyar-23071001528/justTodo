import React, { useContext, useEffect, useState } from "react";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { add, edit } from "../../Redux/Slice";
import contextStore from "../../Context/contextStore";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Create = () => {


  let {isEdit} = useContext(contextStore);




  const list = useSelector((state) => state.data.taskList);
  const content = useSelector((state) => state.data.contentVal);

  console.log(list);

  let [task, setTask] = useState("");
  let dispatch = useDispatch();

  let navigate = useNavigate();
  let submit = () => {
    navigate('/home');
    if (task != "") {
      dispatch(add(task));
    } else {
      alert("Task can't be empty ");
    }
  };
  let updateTask = () => {
    navigate('/home');
    if (task != "") {
      dispatch(edit(task));
    } else {
      alert("Task can't be empty ");
    }
  };

  useEffect(() => {
    setTask(content);
  }, []);

  return ( <motion.div 
      initial={{x:-100, opacity:0}}
      animate={{x:0, opacity:1}}
      exit={{x:100, opacity:0}}>
    <div className="createTaskContainer">
      <div className="createTask">
        <h2>Create Task</h2>
        <div className="fillTask">
          <div className="taskName">
            <span>Task Name : </span>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="taskCategory" style={{display:"flex"}}>
            <p>Topic: </p>
            <Category size="medium" />
          </div>
        </div>

        <div className="actionBtn">
          {isEdit ?
           <button onClick={() => updateTask()}>Update</button>
          : <button onClick={() => submit()}>Submit</button>

          }
          
         
        </div>
      </div>
    </div></motion.div>
  );
};

export default Create;
