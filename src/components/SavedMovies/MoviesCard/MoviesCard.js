import React from 'react';

import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <li className='movies__item'>
      <img className='movies__item-image' src={movie.image} alt={movie.name} />
      <h3 className='movies__item-title'>{movie.name}</h3>
      <p className='movies__item-duration'>{movie.duration}</p>
      <button className='movies__item-delete' type='button'></button>
    </li>
  );
}

export default MoviesCard;
