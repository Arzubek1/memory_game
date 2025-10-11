import { configureStore } from "@reduxjs/toolkit";
import kidsSlice from "./kidsSlice";
import  testSlice  from "./testSlice";

export const store = configureStore({
  reducer: {
    kidsStore: kidsSlice,
    testStore: testSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
