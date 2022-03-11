//Incremental ID for tasks
let nextTaskID = 0;

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 
 * @param {string} text 
 * @returns action ADD_TASK
 */
export const addTask = (text) => {
    return {
        type: ADD_TASK,
        payload:{
            id: nextTaskID ++,
            text
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TASK
 */
export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}