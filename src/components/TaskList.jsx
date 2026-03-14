import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { Context } from "../context/Context";

function TaskList() {
    const {initialTasks}=useContext(Context)
  return (
    <div className="p-2 flex-1 bg-white rounded-sm flex flex-col gap-2 shadow">
      <p className="font-bold ">Your Tasks:</p>
      {initialTasks.map((e) => (
        <TaskCard name={e.title} key={e.id} id={e.id}/>
      ))}
    </div>
  );
}

export default TaskList;
