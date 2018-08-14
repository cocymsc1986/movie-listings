import { connect } from 'react-redux';
import App from './App';

import genreActions from '../actions/genres';

const mapStateToProps = ({ genres }) => ({
  genres
});

const AppContainer = connect(
  mapStateToProps,
  genreActions
)(App);

export default AppContainer;