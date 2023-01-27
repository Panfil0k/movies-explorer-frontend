import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ isReadOnly, handleEdit, signOut, onUpdateUser, profileError }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, setValues, isValid, errors, resetForm } = useFormWithValidation({});
  const notDiffer = values.userName === currentUser.name && values.userEmail === currentUser.email;

  React.useEffect(() => {
    setValues({
      userName: currentUser.name,
      userEmail: currentUser.email
    });
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.userName,
      email: values.userEmail,
    });
  }

  function cancelEdit() {
    handleEdit();
    resetForm();
    setValues({
      userName: currentUser.name,
      userEmail: currentUser.email
    });
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__item'>
          <label className='profile__item-name' htmlFor='userName'>Имя</label>
          <input
            className='profile__item-input'
            id='userName'
            name='userName'
            type='text'
            readOnly={isReadOnly}
            value={values.userName || ''}
            onChange={handleChange}
            required
            minLength='3'
            maxLength='30'
            pattern='^[a-zA-Z\- \u0400-\u04FF]*$'
          />
          <span className={`profile__error profile__error-item ${errors.userName ? 'profile__error_active' : ''}`}>{errors.userName}</span>
        </div>
        <div className='profile__item'>
          <label className='profile__item-name' htmlFor='userEmail'>E-mail</label>
          <input
            className='profile__item-input'
            id='userEmail'
            name='userEmail'
            type='email'
            readOnly={isReadOnly}
            value={values.userEmail || ''}
            onChange={handleChange}
            required
            pattern='^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$'
          />
          <span className={`profile__error profile__error-item ${errors.userEmail ? 'profile__error_active' : ''}`}>{errors.userEmail}</span>
        </div>
        { isReadOnly
          ?
          <>
          <button className='profile__btn profile__btn-edit hovered' type='button' onClick={handleEdit}>Редактировать</button>
          <button className='profile__btn profile__btn-logout hovered' type='button' onClick={signOut}>Выйти из аккаунта</button>
          </>
          :
          <button className='profile__btn profile__btn-save hovered' type='submit' disabled={!isValid || notDiffer || profileError}>Сохранить</button>
        }
        <span className={`profile__error profile__error-form ${profileError ? 'profile__error_active' : ''}`}>{profileError}</span>
        { notDiffer && !isReadOnly && <span className='profile__error profile__error-form profile__error_active'>Измените данные для сохранения.</span>}
        { !isReadOnly && <span className='profile__cancellation hovered' onClick={cancelEdit}>Передумали?</span> }
      </form>
    </section>
  );
}

export default Profile;
