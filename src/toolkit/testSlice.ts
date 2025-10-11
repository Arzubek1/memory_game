import { createSlice } from "@reduxjs/toolkit";

interface testState {
  score: number;
}

const initialState: testState = {
  score: 0,
};

export const testSlice = createSlice({
  name: "TEST",
  initialState,
  reducers: {
    handleScore: (state, action) => {
      state.score += action.payload;
    },
  },
});
export const { handleScore } = testSlice.actions;
export default testSlice.reducer;
