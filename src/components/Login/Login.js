import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <AuthForm
      name='login'
      title='Рады видеть!'
      btnTitle='Войти'
      place='place_login'
      redirectText='Ещё не зарегистрированы?'
      redirectTo='/signup'
      redirectLink='Регистрация'
    >
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>E-mail
          <input
            className='auth__item'
            id='email'
            type='email'
            name='email'
            required
          />
          <span className='auth__error'></span>
        </label>
        <label className='auth__label'>Пароль
          <input
            className='auth__item auth__item_error'
            id='password'
            type='password'
            name='password'
            required
          />
          <span className='auth__error'>Что-то пошло не так...</span>
        </label>
      </fieldset>
    </AuthForm>
  );
}

export default Login;
