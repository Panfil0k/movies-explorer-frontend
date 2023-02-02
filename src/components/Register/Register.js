import React from 'react';

import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({ onRegister, registerError }) {
  const { values, handleChange, isValid, errors } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      username: values.userName,
      email: values.userEmail,
      password: values.password
    })
  }

  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      btnTitle='Зарегистрироваться'
      place='place_register'
      redirectText='Уже зарегистрированы?'
      redirectTo='/signin'
      redirectLink='Войти'
      handleSubmit={handleSubmit}
      isValid={isValid}
      submitError={registerError}
    >
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>Имя
          <input
            className={`auth__item ${errors.userName ? 'auth__item_error' : ''}`}
            id='userName'
            type='text'
            name='userName'
            value={values.userName || ''}
            onChange={handleChange}
            required
            minLength='3'
            maxLength='30'
            pattern='^[a-zA-Z\- \u0400-\u04FF]*$'
          />
          <span className={`auth__error auth__error-input ${errors.userName ? 'auth__error_active' : ''}`}>{errors.userName}</span>
        </label>
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
          <span className={`auth__error auth__error-input ${errors.userEmail ? 'auth__error_active' : ''}`}>{errors.userEmail}</span>
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
          <span className={`auth__error auth__error-input ${errors.password ? 'auth__error_active' : ''}`}>{errors.password}</span>
        </label>
      </fieldset>
      <span className={`auth__error auth__error-form ${registerError ? 'auth__error_active' : ''}`}>{registerError}</span>
    </AuthForm>
  );
}

export default Register;
