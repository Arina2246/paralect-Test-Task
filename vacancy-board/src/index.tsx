import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './services/routing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
