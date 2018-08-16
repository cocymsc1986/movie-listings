import React, { Component } from 'react';

import Movie from './MovieContainer';
import Rating from './Rating'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: null,
      movies: null,
      genre_filter: [],
      score_filter: 0
    }

    this.clickCheckBox = this.clickCheckBox.bind(this);
    this.updateScoreFilter = this.updateScoreFilter.bind(this);
  }

  /* Move functions into App Container - make stateless */
  async componentWillMount() {
    await Promise.all([this.props.getGenres(), this.props.getLatest()]);
    const { genres } = this.props.genres.data;
    const { results: movies } = this.props.movies.data;

    this.setState({
      genres,
      movies
    });
  }

  updateScoreFilter(event) {
    this.setState({
      score_filter: event.target.value
    });
  };

  clickCheckBox(event) {
    const checkbox = event.target.children[1];
    const filters = this.state.genre_filter;

    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      filters.push(checkbox.value);
      event.target.classList.add('filters__genre--selected');
    } else {
      const index = filters.indexOf(checkbox.value);
      filters.splice(index, 1);
      event.target.classList.remove('filters__genre--selected');
    };

    this.setState({
      genre_filter: filters
    });
  }

  filterMovies(movies) {
    const { genre_filter, score_filter } = this.state;

    return movies.filter(movie => {
      return genre_filter.every(id => movie.genre_ids.includes(parseInt(id, 10))) && movie.vote_average > score_filter;
    });
  }

  render() {
    const { genres, movies, score_filter } = this.state;

    return (
      <main className="app">
        <section className="filters">
          <h2>Filters</h2>
          <Rating 
            ratingValue={score_filter}
            updateScoreFilter={this.updateScoreFilter}
          />
          {/* Create Genres component */}
          <h3>Genres</h3>
          <div className="filters__genres">
            {genres && genres.map((genre, key) => {
              return (
                <div className="filters__genre" onClick={this.clickCheckBox} key={key}>
                  <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
                  <input type="checkbox" id={`genre-${genre.id}`} value={genre.id} />
                </div>
              )
            })}
          </div>
        </section>

        <section class="movies"> 
          <h2>Movies</h2>
          <div className="movies__results">
            {movies && this.filterMovies(movies).map((movie, key) => {
              return (
                <Movie
                  imagePath={movie.poster_path}
                  title={movie.title}
                  genreIds={movie.genre_ids}
                  genres={genres}
                  key={key}
                />
              )
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
