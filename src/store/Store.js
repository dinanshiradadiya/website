import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Productbtn from "../component/Productbtn";

 

 const rooteReducer = combineReducers({
    number:Productbtn
 })

 export const store = configureStore({
    reducer: rooteReducer
 })