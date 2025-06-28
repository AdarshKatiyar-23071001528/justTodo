import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphAnalysis = () => {
  let list = useSelector((state) => state.data.taskList);
  let title = useSelector((state) => state.data.categoryValue);

  let [filterTask, setFilterTask] = useState([]);
  let [active, setActive] = useState([]);
  let [complete, setCompleted] = useState([]);

  useEffect(() => {
    setFilterTask(list.filter((task) => task.topic === title));
  }, [title]);

  useEffect(() => {
    setActive(filterTask.filter((task) => task.status == false));
    setCompleted(filterTask.filter((task) => task.status === true));
  }, [filterTask]);

  let [activeLength, setActiveLength] = useState(0);
  let [completeLength, setCompleteLength] = useState(0);
  useEffect(() => {
    setActiveLength(active.length);
    setCompleteLength(complete.length);
  }, [active, complete]);

  const data = {
    labels: ["Active", "Completed"],
    datasets: [
      {
        label: "Tasks",
        data: [activeLength, completeLength],
        backgroundColor: ["#36A2EB", "#4BC0C0"],
      },
    ],
  };

  return (
    <>
      <div className="chart">
        <div className="chartHead">
          <h1>Analyze Your Work</h1>
        </div>

        <div className="numericAnalysis">
          <p>Active : {activeLength}</p>
          <p>Complete : {completeLength}</p>
          <p>Achieve : {((completeLength / (activeLength + completeLength)) * 100).toFixed(0)}%</p>
        </div>

        <div className="piChart">
          <div style={{ width: "300px", height: "300px" }}>
            <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphAnalysis;
