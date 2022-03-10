import { SET_VISIBILITY_FILTER } from "../actions/actions";

//Initial tasksState is empty
let initialState = 'SHOW_ALL';

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter

        //IMPORTANT, RETURN STATE INTO DEFAULT
        default:
            return state;
    }
}