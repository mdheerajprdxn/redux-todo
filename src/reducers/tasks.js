const addTaskReducer = (tasks = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];
    case "GET_TASKS":
      return tasks;
    case "COMPLETE_TASK":
      return tasks.map((task) => {
        console.log(task);
        if (task.taskName == action.payload.taskName) {
          return { ...task, status: "complete" };
        } else {
          return task;
        }
      });
    case "DELETE_TASK":
      return tasks.filter((task) => task !== action.payload);
    default:
      return tasks;
  }
};
export default addTaskReducer;
