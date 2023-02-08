import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navigation.css';
import burger from '../../images/burger-icon.svg';

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function scrollOff() {
    document.body.style.overflow = 'hidden';
  }

  function scrollOn() {
    document.body.style.overflow = 'unset';
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    isOpen ? scrollOff() : scrollOn();
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <img className='burger' src={burger} alt='Меню' onClick={handleClick} />
      <nav className={`nav ${isOpen ? 'nav_active' : ''}`}>
        <button className='nav__close hovered' onClick={handleClick}></button>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/' className='nav__link hovered nav__link_to_main'>Главная</Link>
          </li>
          <li className='nav__item'>
            <NavLink to='/movies' className={
              ({isActive}) => `nav__link hovered ${isActive ? 'nav__link_active' : ''}`
            }>Фильмы</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/saved-movies' className={
              ({isActive}) => `nav__link hovered ${isActive ? 'nav__link_active' : ''}`
            }>Сохранённые фильмы</NavLink>
            </li>
          <li className='nav__item'>
            <Link to='/profile' className='nav__link hovered nav__link_to_profile'>Аккаунт<i className='nav__link-icon'></i></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
