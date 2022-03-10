//Incremental ID for tasks
let nextTaskID = 0;


export const addTask = (text) => {
    return {
        type: 'ADD_TODO',
        payload:{
            id: nextTaskID ++,
            text
        }
    }
}