import { createSlice } from "@reduxjs/toolkit";

interface testState {
  score: number;
  correct: boolean;
}

const initialState: testState = {
  score: 0,
  correct: false,
};

export const testSlice = createSlice({
  name: "TEST",
  initialState,
  reducers: {
    handleCorrect: (state, action) => {
      state.correct = action.payload;
    },
    handleScore: (state) => {
      state.score += 1;
    },
  },
});
export const { handleScore, handleCorrect } = testSlice.actions;
export default testSlice.reducer;
