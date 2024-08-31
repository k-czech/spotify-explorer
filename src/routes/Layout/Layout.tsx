import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layouts/Sidebar.tsx';
import '@/styles/global.scss';
import { useRefreshSpotifyToken, useSpotifyToken } from '@/hooks/useSpotifyAuth.ts';

const Layout = () => {
  const { data: token } = useSpotifyToken();
  const refreshToken = useRefreshSpotifyToken();

  useEffect(() => {
    if (!token) return;

    const refreshInterval = setInterval(
      () => {
        refreshToken.mutate();
      },
      55 * 60 * 1000
    );
    return () => clearInterval(refreshInterval);
  }, [refreshToken, token]);

  return (
    <div className="wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
