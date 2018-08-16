# This is the Movie filtering webapp

## About
The app was built using the create-react-app module. It displays the first page of results that we get back from the Now Playing TMDb API, and offers the ability to filter these results by genres and/or rating.

## To Setup
Clone this repo

Create a .env file and add the following keys:

`REACT_APP_API_BASE_URL` - this is currently https://api.themoviedb.org/3

`REACT_APP_API_KEY`

run `npm install` or `yarn install`

run `npm start`

## Tests
The testing uses Jest and Enzyme, using a mix of unit tests and snapshots - generally snapshots for basic rendered components, and unit testing for components with functionality.

To run, run `npm run test`

## ToDo
Given more time there are a few things I would have done:

* Refactor the functions in `AppContainer.js`, moving them into the relevant components instead of passing them down
* Added some Sass or CSS in JS functionality. Due to the small amount of styles needed, CSS was adequate
* Added PropTypes checking

