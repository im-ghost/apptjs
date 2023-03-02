import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import apptReducer from '../features/appt/apptSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    appt: apptReducer
  },
});
