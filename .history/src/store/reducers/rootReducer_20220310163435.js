import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { tasksReducer } from "./taskReducer";


const rootReducer = combineReducers({
    taskState: tasksReducer,
    filterState: filterReducer
})