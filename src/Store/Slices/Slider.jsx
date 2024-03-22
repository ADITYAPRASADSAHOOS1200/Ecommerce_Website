import { createSlice } from "@reduxjs/toolkit";
import { Sliderdata } from "../../asset/Sliderdata";

const SliderReducer = createSlice({
     name: 'slider',
     initialState: {
     value: 0,
     length:Sliderdata.length,
  },
  reducers: {
    nextslide(state, action) {
      // console.log(action);
      // console.log("state", state);
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevslide(state, action) {
      // console.log(action);
      // console.log("state", state);
      state.value = action.payload < 0 ? state.length-1  : action.payload;
      console.log(state.value);
    },
    dotslide(state, action) {
        const slide=action.payload
        // console.log(slide);
          state.value = slide
    }, 
  },
});


export const {nextslide , prevslide , dotslide }=SliderReducer.actions

export default SliderReducer.reducer