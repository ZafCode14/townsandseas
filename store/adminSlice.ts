import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'toggle',
  initialState: { value: "" },
  reducers: {
    toggleAdmin: (state: { value: string }, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleAdmin } = adminSlice.actions;
export default adminSlice.reducer;