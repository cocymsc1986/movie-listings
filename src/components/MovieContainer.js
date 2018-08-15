import React from 'react';
import Movie from './Movie';

export const getGenreLabels = (genreIds, genres) => {
	let labels = [];

	genreIds.map(id => {
		const label = genres.find(genre => genre.id === id);
		labels.push(label.name);
	});
	
	return labels;
};

export const MovieContainer = ({ imagePath, title, genreIds, genres, movieKey }) => {
	return (
		<Movie
			imagePath={imagePath}
			title={title}
			genreIds={genreIds}
			genreLabels={getGenreLabels(genreIds, genres)}
			movieKey={movieKey}
		/>
	);
}

export default MovieContainer;