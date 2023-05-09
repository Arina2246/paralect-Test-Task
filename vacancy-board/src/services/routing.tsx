import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainPage from '../components/main-page/main-page';
import FavouritesPage from '../components/favourites-page/favourites-page';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Navigate
          to='/main'
          replace
        />
      ),
    },
    {
      path: '/favourites',
      element: <FavouritesPage />,
    },
    {
      path: '/main',
      element: <MainPage />,
    },
  ],
  { basename: '/paralect-Test-Task' }
);
