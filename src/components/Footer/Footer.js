import React from 'react';

import './Footer.css';

function Footer() {
  return (
      <footer className='footer'>
        <div className='footer__container container'>
          <h3 className='footer__title'>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h3>
          <ul className='footer__list'>
            <li className='footer__list-item'>© {new Date().getFullYear()}</li>
            <li className='footer__list-item'>
              <span>Артём Понамарчук</span>
              <a className='footer__list-link hovered' href='https://github.com/Panfil0k' target='_blank' rel='noopener noreferrer'>Github</a>
            </li>
          </ul>
        </div>
      </footer>
  );
}

export default Footer;
