import { ADD_TASK, TOGGLE_TASK } from "../actions/actions";

//Initial tasksState is empty
let initialState = [{
    id: 1,
    text: 'prueba',
    completed: false
}];

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.payload.id,
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
