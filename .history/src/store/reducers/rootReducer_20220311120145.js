import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { tasksReducer } from "./taskReducer";


export const rootReducer = combineReducers({
    tasksState: tasksReducer,
    filterState: filterReducer
})