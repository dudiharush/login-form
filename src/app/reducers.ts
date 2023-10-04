import { authApi } from 'api/auth/auth';
import userReducer from 'slices/user/userSlice';

const rootReducer = {
  [authApi.reducerPath]: authApi.reducer,
  user: userReducer,
};

export default rootReducer;
