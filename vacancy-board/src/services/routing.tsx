import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainPage from '../components/main-page/main-page';
import FavouritesPage from '../components/favourites-page/favourites-page';
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
      path: '/favourites',
      element: <FavouritesPage />,
    },
    {
      path: '/main',
      element: <MainPage />,
    },
    {
      path: '/:id',
      element: <VacancyPage />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
  ],
  { basename: '/paralect-Test-Task' }
);
