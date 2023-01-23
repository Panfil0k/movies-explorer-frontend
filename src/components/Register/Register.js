import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      btnTitle='Зарегистрироваться'
      place='place_register'
      redirectText='Уже зарегистрированы?'
      redirectTo='/signin'
      redirectLink='Войти'
    >
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>Имя
          <input
            className='auth__item'
            id='name'
            type='text'
            name='name'
            required
          />
          <span className='auth__error'></span>
        </label>
        <label className='auth__label'>E-mail
          <input
            className='auth__item auth__item_error'
            id='email'
            type='email'
            name='email'
            required
          />
          <span className='auth__error'>Ошибка!</span>
        </label>
        <label className='auth__label'>Пароль
          <input
            className='auth__item'
            id='password'
            type='password'
            name='password'
            required
          />
          <span className='auth__error'></span>
        </label>
      </fieldset>
    </AuthForm>
  );
}

export default Register;
