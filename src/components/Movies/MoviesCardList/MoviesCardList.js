import React from 'react';

import './MoviesCardList.css';

// HADRCODE MOVIES ARRAY
import moviesArray from '../../../utils/moviesArray';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const result = moviesArray.length;

  return (
    result === 0
    ?
    <p className='not-result'>Ничего не найдено</p>
    :
    <section className='movies'>
      <ul className='movies__list'>
        {moviesArray.map((movie, i) => (
          <MoviesCard
            movie={movie}
            key={i}
          />
        ))}
      </ul>
      <div className='more'>
        <button className='more__btn hovered' type='button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
