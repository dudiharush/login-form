import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from 'api/auth/auth';
import userReducer from 'slices/user/userSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  user: userReducer,
});

export default rootReducer;
