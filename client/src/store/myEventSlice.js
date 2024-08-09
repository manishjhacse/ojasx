import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const myEventSlice = createSlice({
  name: "myEvents",
  initialState,
  reducers: {
    addMyEvents: (state, action) => {
      return action.payload;
    },
  },
});

export const { addMyEvents, } = myEventSlice.actions;
export default myEventSlice.reducer;
