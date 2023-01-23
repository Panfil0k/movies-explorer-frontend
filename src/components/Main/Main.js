import React from 'react';
import { useLocation } from 'react-router-dom';

import './Main.css';

import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

function Main() {
  const location = useLocation();

  function scrollOn() {
    document.body.style.overflow = 'unset';
  }

  React.useEffect(() => {
    scrollOn();
  }, [location]);

  return (
      <>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </>
  );
}

export default Main;
