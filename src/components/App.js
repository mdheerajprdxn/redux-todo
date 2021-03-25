import React from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../actions";
import Form from "./Form";
import { ShowTasks } from "./ShowTasks";

export const App = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    let task = {};
    task.taskName = values.newTask;
    task.status = "incomplete";
    dispatch(addTask(task));
    // console.log(values);
  };
  return (
    <div className='ui container'>
      <div className='ui grid'>
        <h1 className='ui two column centered grid'>To Do List</h1>
      </div>
      <Form onSubmit={handleSubmit} />
      <div className='ui divider'></div>
      <ShowTasks />
    </div>
  );
};
