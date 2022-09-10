import { configureStore } from "@reduxjs/toolkit";
import WatherReducer from "./WeatherDataSlice";

const store = configureStore ({
    reducer : {
        Wather : WatherReducer,
    }
})

export default store