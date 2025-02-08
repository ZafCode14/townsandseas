import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
  name: 'about',
  initialState: { value: "about" },
  reducers: {
    toggleAbout: (state: { value: string }, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleAbout } = aboutSlice.actions;
export default aboutSlice.reducer;