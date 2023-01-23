import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
      <article className='portfolio'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <ul className='portfolio__list'>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='/' target='_blank' rel='noopener noreferrer'>Статичный сайт</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='/' target='_blank' rel='noopener noreferrer'>Адаптивный сайт</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='/' target='_blank' rel='noopener noreferrer'>Одностраничное приложение</a>
          </li>
        </ul>
      </article>
  );
}

export default Portfolio;
