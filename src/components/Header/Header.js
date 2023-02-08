import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const { pathname } = useLocation();

  return (
      <header className={`header ${pathname === '/' ? 'header_place_main' : 'header_place_movies'}`}>
        <div className='header__container container'>
          <Link to='/' className='header__logo-link'>
            <img src={logo} className='header__logo-img' alt='Логотип' />
          </Link>
          { !loggedIn
            ?
            <nav className='header__auth'>
              <Link to='/signup' className='header__registration hovered'>Регистрация</Link>
              <Link to='/signin' className='header__login hovered'>Войти</Link>
            </nav>
            :
            <Navigation />
          }
        </div>
      </header>
  );
}

export default Header;
