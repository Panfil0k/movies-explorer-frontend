import React, { useEffect } from 'react';

import './SavedMovies.css';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import filterMovies from '../../utils/filterMoviesDuration';

function SavedMovies({ savedMovies, setSavedMovies, onDelete, preloader, setPreloader }) {

  function handleSearchMovies(searchQuery, filterDuration) {
    setPreloader(true);
    const moviesInStorage = JSON.parse(localStorage.getItem('savedMovies'));
    setSavedMovies(filterMovies(moviesInStorage, searchQuery, filterDuration));
    setPreloader(false);
  }

  function handleFilterDuration(searchQuery, filterDuration) {
    handleSearchMovies(searchQuery, filterDuration);
  }

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'))
    setSavedMovies(savedMovies);
  }, [])

  return (
    <div className='movies-container'>
      <SearchForm
        handleSearch={handleSearchMovies}
        handleFilterDuration={handleFilterDuration}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        onDelete={onDelete}
        preloader={preloader}
      />
    </div>
  );
}

export default SavedMovies;
