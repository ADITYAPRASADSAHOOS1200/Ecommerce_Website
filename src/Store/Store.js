import { configureStore } from "@reduxjs/toolkit";
import SliderReducer from './Slices/Slider'
import FilterReducer from './Slices/FilterSlice'
import CartSlice from "./Slices/CartSlice";
import  authSlice  from "./Slices/AuthSlice";


const Store=configureStore({
  reducer:{
    sliders:SliderReducer,
    filterProduct:FilterReducer,
    cart:CartSlice,
    Auth:authSlice,
  }
})

export default Store