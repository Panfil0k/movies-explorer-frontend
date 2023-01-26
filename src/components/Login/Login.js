import React, { useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then(resetForm)
      .then(() => navigate('/movies'))
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
    >
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>E-mail
          <input
            className='auth__item'
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <span className='auth__error'>Что-то пошло не так...</span>
        </label>
      </fieldset>
    </AuthForm>
  );
}

export default Login;
