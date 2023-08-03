import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import LoadingPage from 'pages/LoadingPage/LoadingPage';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<LoadingPage />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
