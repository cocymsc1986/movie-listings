import React, { Component } from 'react';

import Movie from './MovieContainer';
import Genres from './Genres';
import Rating from './Rating'

class App extends Component {
  render() {
    const {
      score_filter,
      updateScoreFilter,
      genres,
      movies,
      clickCheckBox,
      filterMovies,
      moviesLoading,
      genresLoading,
      genresError,
      moviesError
    } = this.props;

    return (
      <main className="app">
        <section className="filters">
          <h2>Filters</h2>
          <Rating 
            ratingValue={score_filter}
            updateScoreFilter={updateScoreFilter}
          />
          <h3>Genres</h3>
          {genresError ?
            'Error loading genre filters'
            :
            <div className="filters__genres">
              {genresLoading ?
                'Loading'
                :
                <Genres
                  genres={genres}
                  clickCheckBox={clickCheckBox}
                />
              }
            </div>
          }
        </section>
        <section class="movies"> 
          <h2>Movies</h2>
          {moviesError ?
            'Error loading movies'
            :
            <div className="movies__results">
              {moviesLoading ?
                'Loading'
                :
                movies && filterMovies(movies).map((movie, key) => {
                  return (
                    <Movie
                      imagePath={movie.poster_path}
                      title={movie.title}
                      genreIds={movie.genre_ids}
                      genres={genres}
                      key={key}
                    />
                  )
                })
              }
            </div>
          }
        </section>
      </main>
    );
  }
}

export default App;
