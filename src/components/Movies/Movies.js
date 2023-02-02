import React, { useEffect, useState } from 'react';

import './Movies.css';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

import filterMovies from '../../utils/filterMoviesDuration';

function Movies({ onSave, onDelete, preloader, setPreloader }) {
  const [moviesList, setMoviesList] = useState([]);
  const [searchError, setSearchError] = useState('');
  const [widthWindow, setWidthWindow] = React.useState(document.documentElement.clientWidth);
  const moviesInRow = (widthWindow > 1024) ? 3 : 2;
  const moviesInColumnStart = (widthWindow > 1024) ? 12 : (widthWindow > 600) ? 8 : 5;
  const [moviesInColumn, setMoviesInColumn] = useState(moviesInColumnStart);

  function updateWidthWindow() {
    setWidthWindow(document.documentElement.clientWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidthWindow);
    return () => window.removeEventListener('resize', updateWidthWindow);
  });

  function getAllMovies(searchQuery, filterDuration) {
    moviesApi.getMovies()
    .then((res) => {
      setMoviesList(filterMovies(res, searchQuery, filterDuration));
      localStorage.setItem('beatFilms', JSON.stringify(res));
      localStorage.setItem('firstSearch', false);
    })
    .catch(() => {
      setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    })
    .finally(() => {
      setPreloader(false);
    });
  }

  function handleSearchMovies(searchQuery, filterDuration) {
    setPreloader(true);
    setMoviesInColumn(moviesInColumnStart);

    if (localStorage.getItem('beatFilms')) {
      const moviesInStorage = JSON.parse(localStorage.getItem('beatFilms'));
      setMoviesList(filterMovies(moviesInStorage, searchQuery, filterDuration));
      setPreloader(false);
    } else {
      getAllMovies(searchQuery, filterDuration);
    }
  }

  function handleFilterDuration(searchQuery, filterDuration) {
    handleSearchMovies(searchQuery, filterDuration);
  }

  useEffect(() => {
    const moviesInStorage = JSON.parse(localStorage.getItem('beatFilms'));
    if (!moviesInStorage) {
      setMoviesList([]);
      return;
    }
    const searchQuery = localStorage.getItem('searchQuery');
    const filterDuration = JSON.parse(localStorage.getItem('filterDuration'));
    setMoviesList(filterMovies(moviesInStorage, searchQuery, filterDuration));
  }, [])

  return (
    <div className='movies-container'>
      <SearchForm
        handleSearch={handleSearchMovies}
        handleFilterDuration={handleFilterDuration}
      />
      <MoviesCardList
        searchError={searchError}
        moviesList={moviesList}
        preloader={preloader}
        moviesInRow={moviesInRow}
        moviesInColumn={moviesInColumn}
        setMoviesInColumn={setMoviesInColumn}
        onSave={onSave}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Movies;
