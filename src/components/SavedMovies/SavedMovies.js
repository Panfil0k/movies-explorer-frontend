import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <div className='movies-container'>
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;
