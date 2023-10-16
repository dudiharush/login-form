import { routes } from 'app/routes';
import React from 'react';
import { RouterProvider, RouterProviderProps } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

type AppProps = Partial<Pick<RouterProviderProps, 'router'>>

function App({router = createBrowserRouter(routes)}:AppProps) {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>}
  />;
}

export default App;
