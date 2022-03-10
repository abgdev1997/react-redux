//Incremental ID for tasks
let nextTaskID = 0;


export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        payload:{
            id: nextTaskID ++,
            text
        }
    }
}