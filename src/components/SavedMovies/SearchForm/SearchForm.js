import React, { useState } from 'react';

function SearchForm({ handleSearch, handleFilterDuration }) {
  const [filterDuration, setFilterDuration] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function handleChecked() {
    setFilterDuration(!filterDuration);
    handleFilterDuration(searchQuery, !filterDuration);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSearch(searchQuery, filterDuration);
  }

  return (
    <form className='search' onSubmit={onSubmit}>
      <fieldset className='search__fieldset'>
        <input
          className='search__input'
          type='text'
          placeholder='Фильм'
          name='searchQuery'
          value={searchQuery || ''}
          onChange={({ target }) => setSearchQuery(target.value)}
        />
        <button className='search__btn hovered' type='submit'></button>
      </fieldset>
      <input
        id='search__checkbox'
        className='search__checkbox'
        type='checkbox'
        onChange={handleChecked}
        checked={filterDuration}
      />
      <label className='search__label' htmlFor='search__checkbox'>Короткометражки</label>
    </form>
  );
}

export default SearchForm;
