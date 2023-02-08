import React from 'react';

import './MoviesCard.css';

import getTimeFromMins from '../../../utils/getTimeFromMins';

function MoviesCard({ movie, onDelete }) {
  function handleDeleteMovie() {
    onDelete(movie._id);
  }

  return (
    <li className='movies__item'>
      <a className='movies__item-link' href={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
        <img className='movies__item-image' src={movie.image} alt={movie.nameRU} />
      </a>
      <h3 className='movies__item-title'>{movie.nameRU}</h3>
      <p className='movies__item-duration'>{getTimeFromMins(movie.duration)}</p>
      <button className='movies__item-delete' type='button' onClick={handleDeleteMovie}></button>
    </li>
  );
}

export default MoviesCard;
