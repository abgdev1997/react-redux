import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { tasksReducer } from "./taskReducer";


export const rootReducer = combineReducers({
    taskState: tasksReducer,
    filterState: filterReducer
})