import React from 'react';

import './AboutMe.css';
import photo from '../../../images/me.png';

import Portfolio from './Portfolio/Portfolio';

function AboutMe() {
  return (
      <section className='about-me'>
        <div className='about-me__container container'>
          <h2 className='main-title'>Студент</h2>
          <article className='about-me__info'>
            <h3 className='about-me__name'>Артём</h3>
            <p className='about-me__status'>Фронтенд-разработчик, 33&nbsp;года</p>
            <p className='about-me__text'>Я&nbsp;живу в&nbsp;Тбилиси и&nbsp;учусь на&nbsp;курсе &laquo;Веб-разработчик&raquo; в&nbsp;Яндекс Практикум. Ранее почти два года занимался вёрсткой сайтов для студии Zet Graphics. Открыт к&nbsp;предложениям о&nbsp;работе и&nbsp;сотрудничестве.</p>
            <a className='about-me__link hovered' href='https://github.com/Panfil0k' target='_blank' rel='noopener noreferrer'>Github</a>
            <img src={photo} className='about-me__photo' alt='Артём Понамарчук' />
          </article>
          <Portfolio />
        </div>
      </section>
  );
}

export default AboutMe;
