import {combineReducers, createStore} from 'redux'
import {editPageReducer} from "./editPage-reducer";


const rootReducer = combineReducers({
    editPage: editPageReducer
})

export const store = createStore(rootReducer);


