import { ADD_TASK, TOGGLE_TASK } from "../actions/actions";

//Initial tasksState is empty
let initialState = [];

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLE_TASK:
            return state.map((task) => (
                (task.id === action.payload.id)
                ?
                {
                    ...task,
                    completed: !task.completed
                }
                :
                task
            ))

        //IMPORTANT, RETURN STATE INTO DEFAULT
        default:
            return state;
    }
}
