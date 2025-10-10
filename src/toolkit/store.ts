import { configureStore } from "@reduxjs/toolkit";
import kidsSlice from "./kidsSlice";

export const store = configureStore({
  reducer: {
    kidsStore: kidsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
