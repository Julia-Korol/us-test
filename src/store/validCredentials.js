import { createSlice } from '@reduxjs/toolkit';

export const validCredentialsSlice = createSlice({
  name: 'validCredentials',
  initialState: {
    login: 'developer21',
    password: '123456',
  },
});

export default validCredentialsSlice.reducer;
