import { combineReducers } from "redux";
import detailReducer from "./detailSlice"


export const rootReducer = combineReducers({
    details: detailReducer,
})