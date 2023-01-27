import React from 'react';

import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login({ onLogin, loginError }) {
  const { values, handleChange, isValid, errors } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: values.userEmail,
      password: values.password
    })
  }

  return (
    <AuthForm
      name='login'
      title='Рады видеть!'
      btnTitle='Войти'
      place='place_login'
      redirectText='Ещё не зарегистрированы?'
      redirectTo='/signup'
      redirectLink='Регистрация'
      handleSubmit={handleSubmit}
      isValid={isValid}
      submitError={loginError}
    >
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>E-mail
          <input
            className={`auth__item ${errors.userEmail ? 'auth__item_error' : ''}`}
            id='userEmail'
            type='email'
            name='userEmail'
            value={values.userEmail || ''}
            onChange={handleChange}
            required
            pattern='^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$'
          />
          <span className='auth__error auth__error-input'>{errors.userEmail}</span>
        </label>
        <label className='auth__label'>Пароль
          <input
            className={`auth__item ${errors.password ? 'auth__item_error' : ''}`}
            id='password'
            type='password'
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            required
            minLength='6'
          />
          <span className='auth__error auth__error-input'>{errors.password}</span>
        </label>
      </fieldset>
      <span className='auth__error auth__error-form'>{loginError}</span>
    </AuthForm>
  );
}

export default Login;
