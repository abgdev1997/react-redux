import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

export const createAppStore = () => {
    let store = createStore(createStore, composeWithDevTools());

    return store;
}