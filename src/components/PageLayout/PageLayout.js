import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PageLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      { pathname !== '/profile' && <Footer /> }
    </>
  );
}

export default PageLayout;
