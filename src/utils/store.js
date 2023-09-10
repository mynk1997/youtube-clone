import { configureStore } from "@reduxjs/toolkit";
import appSclice from "./appSclice";
import searchSclice from "./searchSclice";
import chatSlice from "./chatSlice";

const store= configureStore({
    reducer:{
        app: appSclice,
        search:searchSclice,
        chat:chatSlice
    }
})

export default store;