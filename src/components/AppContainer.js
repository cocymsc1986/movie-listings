import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';

import genreActions from '../actions/genres';
import movieActions from '../actions/movies';

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: null,
      movies: null,
      genre_filter: [],
      score_filter: 3
    }

    this.clickCheckBox = this.clickCheckBox.bind(this);
    this.updateScoreFilter = this.updateScoreFilter.bind(this);
  }

  async componentWillMount() {
    await Promise.all([this.props.getGenres(), this.props.getLatest()]);
    const { results: movies } = this.props.movies.data;

    // Sort by popularity
    movies.sort((a, b) => b.popularity - a.popularity)

    // Get relevant genres
    const genres = this.filterGenres();

    this.setState({
      genres,
      movies
    });
  }

  filterGenres() {
    const { genres: { data: { genres } }, movies: { data: { results } } } = this.props;
    let applicableGenres = [];

    // Find which genres we need from the returned movies and push into array applicableGenres
    results.forEach(movie => {
      movie.genre_ids.forEach(id => {
        if (!applicableGenres.includes(id)) { 
          applicableGenres.push(id)
        }
      });
    });

    // filter the genre list to only include what is in applicableGenres
    return genres.filter(genre => applicableGenres.includes(genre.id));
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
      return genre_filter.every(id => movie.genre_ids.includes(parseInt(id, 10))) && movie.vote_average >= score_filter;
    });
  }

  render() {
    const { genres, movies, score_filter } = this.state;
    const { genres: { loading: genresLoading, error: genresError }, movies: { loading: moviesLoading, error: moviesError } } = this.props;

    return (
      <App
        genres={genres}
        movies={movies}
        score_filter={score_filter}
        genresLoading={genresLoading}
        moviesLoading={moviesLoading}
        filterMovies={() => this.filterMovies(movies)}
        clickCheckBox={(e) => this.clickCheckBox(e)}
        updateScoreFilter={(e) => this.updateScoreFilter(e)}
        genresError={genresError}
        moviesError={moviesError}
      />
    )
  }
}

const mapStateToProps = ({ genres, movies }) => ({
  genres,
  movies
});

export default connect(
  mapStateToProps,
  { ...genreActions, ...movieActions }
)(AppContainer);