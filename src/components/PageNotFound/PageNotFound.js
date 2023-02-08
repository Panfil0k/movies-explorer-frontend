import React from 'react';
import { useNavigate } from 'react-router-dom';

import './PageNotFound.css';


function PageNotFound () {
  const navigate = useNavigate();

  function toMain() {
    navigate('/', {replace: true});
  }

  return (
    <div className='not-found'>
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='hovered not-found__link' onClick={toMain}>На главную</button>
    </div>
  )
}

export default PageNotFound;
