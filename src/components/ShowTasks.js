import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Task } from "./Task";

export const ShowTasks = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const [taskList, setTaskList] = useState("all");
  const renderedTasks = tasks.map((task) => {
    if (taskList == task.status || taskList == "all") {
      return <Task task={task} />;
    }
  });
  return (
    <div>
      <h2 className='ui header'>Tasks:</h2>

      <div className='ui field'>
        <form action=''>
          {}
          <select
            name='taskList'
            component='select'
            value={taskList}
            onChange={(e) => setTaskList(e.target.value)}
          >
            <option value='all' defaultValue>
              All
            </option>
            <option value='complete'>Completed</option>
            <option value='incomplete'>Not Completed</option>
          </select>
        </form>
      </div>
      <div className='ui divider'></div>

      {renderedTasks}
    </div>
  );
};
