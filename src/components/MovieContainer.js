import React from 'react';
import Movie from './Movie';

export const getGenreLabels = (genreIds, genres) => {
	return genreIds.map(id => genres.find(genre => genre.id === id).name);
};

export const MovieContainer = ({ imagePath, title, genreIds, genres }) => {
	return (
		<Movie
			imagePath={imagePath}
			title={title}
			genreIds={genreIds}
			genreLabels={getGenreLabels(genreIds, genres)}
		/>
	);
}

export default MovieContainer;