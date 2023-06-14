import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './stores/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
