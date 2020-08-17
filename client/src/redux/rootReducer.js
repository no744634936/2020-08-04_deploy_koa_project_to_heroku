import {combineReducers} from "redux"
import currentUserReducer from "./currentUser/currentUserReducer.js"

const rootReducer=combineReducers({
    current_user:currentUserReducer,

})


export default rootReducer