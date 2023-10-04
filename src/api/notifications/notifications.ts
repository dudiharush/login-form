import { authApi } from 'api/auth/auth';
import { NotificationsResponseType } from './notifications.interface';

export const notificationsApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    notifications: builder.query<NotificationsResponseType, void>({
      query: () => ({
        url: '/notifications',
        method: 'GET',
      }),
    }),
  }),
});

export const { useNotificationsQuery } = notificationsApi;
