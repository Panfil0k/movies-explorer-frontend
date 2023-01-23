import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

// HADRCODE MOVIES ARRAY
import moviesArray from '../../../utils/moviesArray';

function MoviesCardList() {
  //HARDCODE SELECT MOVIES
  const selectMovies = moviesArray.filter(function (movie) {
    return movie.select === true;
  });

  const result = moviesArray.length;

  return (
    result === 0
    ?
    <p className='not-result'>Ваш список пуст</p>
    :
    <section className='movies'>
      <ul className='movies__list'>
        {selectMovies.map((movie, i) => (
          <MoviesCard
            movie={movie}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
