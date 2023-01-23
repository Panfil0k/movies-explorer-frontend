import React, { useState } from 'react';

import './MoviesCard.css';

function MoviesCard({ movie }) {
  const [select, setSelect] = useState(movie.select);

  function handleSelect() {
    setSelect(!select);
  }

  return (
    <li className='movies__item'>
      <img className='movies__item-image' src={movie.image} alt={movie.name} onClick={handleSelect} />
      <h3 className='movies__item-title'>{movie.name}</h3>
      <p className='movies__item-duration'>{movie.duration}</p>
      <button className={`movies__item-select ${select ? 'movies__item-select_active' : ''}`} type='button' onClick={handleSelect}>Сохранить</button>
    </li>
  );
}

export default MoviesCard;
