import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
      <section className='about-project'>
        <div className='about-project__container container'>
          <h2 className='main-title'>О проекте</h2>
          <article className='about-project__info'>
            <div className='about-project__info-item'>
              <h3 className='about-project__info-title'>Дипломный проект включал 5&nbsp;этапов</h3>
              <p className='about-project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
            </div>
            <div className='about-project__info-item'>
              <h3 className='about-project__info-title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
              <p className='about-project__info-text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </article>
          <article className='about-project__timeline'>
            <div className='about-project__timeline-item'>
              <p className='about-project__timeline-text'>1&nbsp;неделя</p>
              <p className='about-project__timeline-text'>4&nbsp;недели</p>
            </div>
            <div className='about-project__timeline-item'>
              <p className='about-project__timeline-text'>Back-end</p>
              <p className='about-project__timeline-text'>Front-end</p>
            </div>
          </article>
        </div>
      </section>
  );
}

export default AboutProject;
