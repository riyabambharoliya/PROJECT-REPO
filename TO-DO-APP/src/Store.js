import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reduser";



export const store1 = configureStore({
    reducer : {
        num : reducer
    }
})
