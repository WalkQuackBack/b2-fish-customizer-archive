import { configureStore } from "@reduxjs/toolkit";
import fishDataReducer from "./features/fishData/fishDataSlice";

export default configureStore({
  reducer: {
    fishData: fishDataReducer,
  },
});
