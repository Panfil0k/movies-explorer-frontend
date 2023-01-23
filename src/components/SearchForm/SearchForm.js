import React, { useState } from 'react';

import './SearchForm.css';

function SearchForm() {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <form className='search'>
      <fieldset className='search__fieldset'>
        <input className='search__input' type='text' placeholder='Фильм' required />
        <button className='search__btn hovered' type='submit'></button>
      </fieldset>
      <input id='search__checkbox' className='search__checkbox' type='checkbox' onChange={handleChecked}/>
      <label className='search__label' htmlFor='search__checkbox'>Короткометражки</label>
    </form>
  );
}

export default SearchForm;
