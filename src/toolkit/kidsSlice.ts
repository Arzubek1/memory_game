import { createSlice } from "@reduxjs/toolkit";
interface kidsState {
  find: boolean,
  finish: boolean,
  count: number
}
const initialState: kidsState = {
  find: false,
  finish: false,
  count: 0
};

export const kidsSlice = createSlice({
  name: "KIDS",
  initialState,
  reducers: {
    handleBlocks: (state, action) => {
      state.find = action.payload;
    },
     handleFinish: (state, action) => {
      state.finish = action.payload;
    },
     handleCount: (state) => {
      state.count += 1;
    },
    
  },
});
export const { handleBlocks, handleFinish, handleCount } = kidsSlice.actions;
export default kidsSlice.reducer;
