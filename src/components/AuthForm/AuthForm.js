import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './AuthForm.css';

function AuthForm({ title, name, children, btnTitle, redirectText, redirectTo, redirectLink, place, handleSubmit }) {
  return (
    <section className='auth'>
      <Link to='/' className='auth__logo-link'>
        <img src={logo} className='auth__logo-img' alt='Логотип' />
      </Link>
      <h3 className='auth__title'>{title}</h3>
      <form className='auth__form' name={name} onSubmit={handleSubmit}>
        {children}
        <button className={'hovered auth__submit auth__submit_' + place} type='submit'>{btnTitle}</button>
      </form>
      <p className='auth__redirect'>
        {redirectText}
        <Link to={redirectTo} className='hovered auth__redirect-link'>{redirectLink}</Link>
      </p>
    </section>
  );
}

export default AuthForm;
