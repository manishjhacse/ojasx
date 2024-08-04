import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";
import loggedInSlice from "./loginSlice";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    events: eventSlice,
    loggedIn: loggedInSlice,
    loggedInUser: userSlice,
  },
});
export default store;
