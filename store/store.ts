import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './aboutSlice';
import adminReducer from './adminSlice';
import projectsReducer from './projectSlice';

const store = configureStore({
  reducer: {
    about: aboutReducer,
    admin: adminReducer,
    projects: projectsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;