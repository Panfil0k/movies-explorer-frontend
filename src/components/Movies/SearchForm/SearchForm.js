import React, { useState, useEffect } from 'react';

import './SearchForm.css';

function SearchForm({ handleSearch, handleFilterDuration }) {
  const [filterDuration, setFilterDuration] = useState(false);
  const searchQueryInStorage = localStorage.getItem('searchQuery');
  const [searchQuery, setSearchQuery] = useState(searchQueryInStorage);

  function handleChecked() {
    setFilterDuration(!filterDuration);
    localStorage.setItem('filterDuration', JSON.stringify(!filterDuration));
    if (searchQuery) {
      handleFilterDuration(searchQuery, !filterDuration);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('filterDuration', JSON.stringify(filterDuration));
    handleSearch(searchQuery, filterDuration);
  }

  useEffect(() => {
    const filterDuration = JSON.parse(localStorage.getItem('filterDuration'));
    if (filterDuration) {
      setFilterDuration(filterDuration)
      return;
    }
    setFilterDuration(false);
  }, [])

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
          required
        />
        <button className='search__btn hovered' type='submit' disabled={!searchQuery}></button>
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
