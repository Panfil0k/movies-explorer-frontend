import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList({ savedMovies, onDelete, preloader }) {

  return (
    <>
      { preloader && <Preloader /> }
      { savedMovies.length === 0 && !preloader
        ?
        ( <p className='not-result'>Ничего нет</p> )
        : (
        <section className='movies'>
          <ul className='movies__list'>
            {savedMovies.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.movieId}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
