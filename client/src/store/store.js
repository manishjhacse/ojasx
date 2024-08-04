import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";

const store=configureStore({
    reducer:{
        events:eventSlice
    }
})
export default store;