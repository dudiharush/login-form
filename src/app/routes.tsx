import { Route } from 'app/app.interface';
import AuthLayout from 'layouts/authLayout/AuthLayout';
import DashboardLayout from 'layouts/dashboardLayout/DashboardLayout';
import Error404 from 'pages/error404/Error404';
import Intro from 'pages/intro/Intro';
import Login from 'pages/login/Login';
import { ProtectedRoutes } from './ProtectedRoutes';

export const routes: Route[] = [
  {
    path: '/login',
    element: <AuthLayout />,

    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {path: '',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Intro />,
        },
        {
          path: 'intro',
          element: <Intro />,
        },
      ],}
    ]
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
