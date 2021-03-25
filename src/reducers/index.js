import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import taskReducer from "./tasks";

const reducers = combineReducers({
  tasks: taskReducer,
  form: formReducer,
});

export default reducers;
