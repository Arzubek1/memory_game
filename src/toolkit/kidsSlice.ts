import { createSlice } from "@reduxjs/toolkit";
interface kidsState {
  find: boolean
}
const initialState: kidsState = {
  find: false,
};

export const kidsSlice = createSlice({
  name: "KIDS",
  initialState,
  reducers: {
    handleBlocks: (state, action) => {
      state.find = action.payload;
    },
  },
});
export const { handleBlocks } = kidsSlice.actions;
export default kidsSlice.reducer;
