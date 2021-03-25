export const addTask = (task) => {
  console.log(task);
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const deleteTask = (task) => {
  return {
    type: "DELETE_TASK",
    payload: task,
  };
};

export const completeTask = (task) => {
  return {
    type: "COMPLETE_TASK",
    payload: task,
  };
};
