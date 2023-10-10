import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponseType } from 'api/auth/auth.interface';

import { authApi } from 'api/auth/auth';
import { RootState } from 'app/store';
import { UserState } from './user.interface';

export const userSlice = createSlice({
  initialState: {} as UserState,
  name: 'userSlice',
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponseType>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    });
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
