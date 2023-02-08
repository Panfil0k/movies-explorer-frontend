import React, { useState, useEffect } from 'react';

import './MoviesCard.css';

import getTimeFromMins from '../../../utils/getTimeFromMins';

function MoviesCard({ movie, onSave, onDelete }) {
  const [saveMovie, setSaveMovie] = useState(false);

  function handleSaveMovie() {
    setSaveMovie(!saveMovie);

    if(saveMovie) {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      onDelete(savedMovies.find(item => item.movieId === movie.id)._id);
      return
    }

    onSave(movie);
  }

  function checkSavedMovies() {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setSaveMovie(savedMovies.some((data) => data.movieId === movie.id))
  }

  useEffect(() => {
    checkSavedMovies();
  }, [])

  return (
    <li className='movies__item'>
      <a className='movies__item-link' href={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
        <img className='movies__item-image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
      </a>
      <h3 className='movies__item-title'>{movie.nameRU}</h3>
      <p className='movies__item-duration'>{getTimeFromMins(movie.duration)}</p>
      <button className={`movies__item-select ${saveMovie ? 'movies__item-select_active' : ''}`} type='button' onClick={handleSaveMovie}>Сохранить</button>
    </li>
  );
}

export default MoviesCard;
