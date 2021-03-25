import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { deleteTask, completeTask } from "../actions";
import "./Task.css";
export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={task}
      className={`ui grid equal width ${
        task.status == "complete" ? `strike-through` : ""
      }`}
    >
      <div className='column'>{task.taskName}</div>
      <div className='column'>
        {task.status == "complete" ? (
          ""
        ) : (
          <button
            className='ui green button'
            id={task}
            onClick={() => dispatch(completeTask(task))}
          >
            done
          </button>
        )}

        <button
          className='ui red button'
          id={task}
          onClick={() => dispatch(deleteTask(task))}
        >
          delete
        </button>
      </div>
    </div>
  );
};
