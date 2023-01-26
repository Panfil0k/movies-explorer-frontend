import React, { useState } from 'react';

import './Profile.css';

function Profile({ userData, signOut }) {
  const { name, email } = userData;
  const [isReadonly, setIsReadonly] = useState(true);

  function handleEdit() {
    setIsReadonly(!isReadonly);
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Артём!</h2>
      <div className='profile__item'>
        <label className='profile__item-name' htmlFor='user-name'>Имя</label>
        <input className='profile__item-input' id='user-name' type='text' placeholder={name} readOnly={isReadonly} />
      </div>
      <div className='profile__item'>
        <label className='profile__item-name' htmlFor='user-email'>E-mail</label>
        <input className='profile__item-input' id='user-email' type='email' placeholder={email} readOnly={isReadonly} />
        <span className='profile__item-error'>При обновлении профиля произошла ошибка.</span>
      </div>
      { isReadonly
        ?
        <>
        <button className='profile__btn profile__btn-edit hovered' type='button' onClick={handleEdit}>Редактировать</button>
        <button className='profile__btn profile__btn-logout hovered' type='button' onClick={signOut}>Выйти из аккаунта</button>
        </>
        :
        <button className='profile__btn profile__btn-save hovered' type='button' onClick={handleEdit}>Сохранить</button>
      }
    </section>
  );
}

export default Profile;
