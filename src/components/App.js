import React, { Component } from 'react';
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

    this.updateGenreFilter = this.updateGenreFilter.bind(this);
    this.updateScoreFilter = this.updateScoreFilter.bind(this);
  }

  async componentWillMount() {
    await Promise.all([this.props.getGenres(), this.props.getLatest()]);
    const { genres } = this.props.genres.data;
    const { results: movies } = this.props.movies.data;

    this.setState({
      genres,
      movies
    });
  }

  getGenreLabels(genreIds) {
    const { genres } = this.state;

    return genreIds.map(id => {
      const label = genres.find(genre => genre.id === id);
      return (
        <span>
          {label.name}
        </span>
      )
    })
  }

  updateScoreFilter(event) {
    this.setState({
      score_filter: event.target.value
    });
  };

  updateGenreFilter(event) {
    const filters = this.state.genre_filter;

    if (event.target.checked) {
      filters.push(event.target.value)
    } else {
      const index = filters.indexOf(event.target.value)
      filters.splice(index, 1)
    };

    this.setState({
      genre_filter: filters
    });
  }

  filterMovies(movies) {
    const { genre_filter, score_filter } = this.state;

    return movies.filter(movie => {
      return genre_filter.every(id => movie.genre_ids.includes(parseInt(id))) && movie.vote_average > score_filter;
    });
  }

  render() {
    const { genres, movies } = this.state;

    return (
      <div className="App">
        Rating
        <input type="range" min="0" max="10" step="0.5" value={this.state.score_filter} onChange={this.updateScoreFilter} />
        Genres
        {genres && genres.map((genre, key) => {
          return (
            <div key={key}>
              <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
              <input onChange={this.updateGenreFilter} type="checkbox" id={`genre-${genre.id}`} value={genre.id} />
            </div>
          )
        })}

        Movies
        {movies && this.filterMovies(movies).map((movie, key) => {
          return (
            <ul key={key}>
              <li><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}-image`} /></li>
              <li>{movie.title}</li>
              <li>{this.getGenreLabels(movie.genre_ids)}</li>
            </ul>
          )
        })}
      </div>
    );
  }
}

export default App;
