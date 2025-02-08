import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './aboutSlice'

const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;