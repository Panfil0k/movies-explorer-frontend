import React, { useState, useCallback } from 'react';

import AuthForm from '../AuthForm/AuthForm';

function Register({ onRegister }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = useCallback(() => {
    setUserName('');
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ username, email, password })
      .then(resetForm)
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
    >
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>Имя
          <input
            className='auth__item'
            id='name'
            type='text'
            name='username'
            value={username}
            onChange={({ target }) => setUserName(target.value)}
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
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <span className='auth__error'></span>
        </label>
      </fieldset>
    </AuthForm>
  );
}

export default Register;
