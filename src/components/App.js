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

    this.clickCheckBox = this.clickCheckBox.bind(this);
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
        <span className="movies__genre-label">
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

  clickCheckBox(event) {
    const checkbox = event.target.children[1];
    const filters = this.state.genre_filter;
    const classes = event.target.classList;

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
      return genre_filter.every(id => movie.genre_ids.includes(parseInt(id))) && movie.vote_average > score_filter;
    });
  }

  render() {
    const { genres, movies } = this.state;

    return (
      <main className="app">
        <section className="filters">
          <label htmlFor="rating"><h2>Rating</h2></label>
          <div className="filters__rating">
            <input id="rating" type="range" min="0" max="10" step="0.5" value={this.state.score_filter} onChange={this.updateScoreFilter} />
          </div>
          <h2>Genres</h2>
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
                <article className="movies__result" key={key}>
                  <div className="movies__image"><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}-image`} /></div>
                  <div>
                    <div className="movies__title"><h3>{movie.title}</h3></div>
                    <div className="movies__genre-labels">{this.getGenreLabels(movie.genre_ids)}</div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
