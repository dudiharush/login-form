import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponseType } from 'api/auth/auth.interface';

import { UserState } from './user.interface';
import { authApi } from 'api/auth/auth';

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
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken
        state.user = payload.user
      }
    )
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
