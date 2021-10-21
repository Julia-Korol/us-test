import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import validCredentialsSlice from './validCredentials';

export default configureStore({
  reducer: {
    user: userSlice,
    validCredentials: validCredentialsSlice,
  },
});
