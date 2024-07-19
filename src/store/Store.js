import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Productbtn from "../components/product/Productbtn";


 

 const rooteReducer = combineReducers({
    number:Productbtn
 })

 export const store = configureStore({
    reducer: rooteReducer
 })