import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainPage from '../components/main-page/main-page';
import FavoritesPage from '../components/favorites-page/favorites-page';
import NotFound from '../components/not-found/not-found';
import VacancyPage from '../components/vacancy-page/vacancy-page';

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
      path: '/favorites',
      children: [
        {
          index: true,
          element: <FavoritesPage />,
        },
        {
          path: '404',
          element: <NotFound />,
        },
      ],
    },
    {
      path: '/main',
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: '404',
          element: <NotFound />,
        },
        {
          path: ':id',
          element: <VacancyPage />,
        },
      ],
    },
  ],
  { basename: '/paralect-Test-Task' }
);
