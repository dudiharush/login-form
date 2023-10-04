import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponseType } from 'api/auth/auth.interface';

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
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
