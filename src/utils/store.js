import { configureStore } from "@reduxjs/toolkit";
import appSclice from "./appSclice";
import searchSclice from "./searchSclice";

const store= configureStore({
    reducer:{
        app: appSclice,
        search:searchSclice,
    }
})

export default store;