import { connect } from 'react-redux';
import App from './App';

import genreActions from '../actions/genres';
import movieActions from '../actions/movies';

const mapStateToProps = ({ genres, movies }) => ({
  genres,
  movies
});

const AppContainer = connect(
  mapStateToProps,
  { ...genreActions, ...movieActions }
)(App);

export default AppContainer;