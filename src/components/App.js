import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import genreActions from '../actions/genres';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: null
    }
  }

  async componentWillMount() {
    await Promise.all([this.props.getGenres()]);
    await this.props.getGenres();
    const { genres } = this.props.genres.data;

    this.setState({
      genres
    })
  }

  updateGenreFilter() {

  }

  render() {
    const { genres } = this.state;
    return (
      <div className="App">
        Movies
        {genres && genres.map((genre, key) => {
          return (
            <div>
              <label for={`genre-${genre.id}`}>{genre.name}</label>
              <input onClick={this.updateGenreFilter} type="checkbox" id={`genre-${genre.id}`} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
