import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList({ moviesList, searchError, preloader, moviesInRow, moviesInColumn, setMoviesInColumn, onSave, onDelete }) {
  const firstSearch = JSON.parse(localStorage.getItem('firstSearch'));
  const displayedMovies = moviesList.slice(0, moviesInColumn);

  function checkMoreMovies() {
    if (moviesList.length > displayedMovies.length) {
      return true;
    }
    return false;
  };

  function addDisplayedMovies() {
    setMoviesInColumn(moviesInColumn + moviesInRow);
  }

  return (
    <>
      { preloader && <Preloader /> }
      { searchError && ( <p className='not-result'>{searchError}</p> ) }
      <section className='movies'>
        {
          firstSearch && !preloader
          ?
          ( <p className='not-result'>Начните поиск</p> )
          :
          !firstSearch && moviesList.length === 0 && !preloader
          ?
          ( <p className='not-result'>Ничего не найдено</p> )
          :
          (
            <ul className='movies__list'>
              {displayedMovies.map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  onSave={onSave}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          )
        }
        { checkMoreMovies() && (
          <div className='more'>
              <button className='more__btn hovered' type='button' onClick={addDisplayedMovies}>Ещё</button>
          </div>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
