import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '@/routes/Layout/Layout.tsx';
import ErrorPage from '@/ErrorPage.tsx';
import Dashboard from '@/routes/Dashboard/Dashboard.tsx';
import Favorites from '@/routes/Favorites/Favorites.tsx';

export const routerConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Dashboard />} />
      <Route path="/favorites" element={<Favorites />} />
    </Route>
  )
);
