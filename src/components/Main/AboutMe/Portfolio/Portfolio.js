import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
      <article className='portfolio'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <ul className='portfolio__list'>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://panfil0k.github.io/portfolio' target='_blank' rel='noopener noreferrer'>Сайт-визитка</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://github.com/Panfil0k/how-to-learn' target='_blank' rel='noopener noreferrer'>Статичный сайт</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://github.com/Panfil0k/russian-travel' target='_blank' rel='noopener noreferrer'>Адаптивный сайт</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://panfil0k.github.io/aim-training/' target='_blank' rel='noopener noreferrer'>Простая игра на JS</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://github.com/Panfil0k/mesto' target='_blank' rel='noopener noreferrer'>Одностраничное приложение на JS</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://github.com/Panfil0k/react-mesto-auth' target='_blank' rel='noopener noreferrer'>Одностраничное приложение на React</a>
          </li>
          <li className='portfolio__item hovered'>
            <a className='portfolio__link' href='https://github.com/Panfil0k/express-mesto-gha' target='_blank' rel='noopener noreferrer'>Бэкенд на Express и MongoDB</a>
          </li>
        </ul>
      </article>
  );
}

export default Portfolio;
