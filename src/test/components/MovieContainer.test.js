import React from 'react';

import MovieContainer, { getGenreLabels } from '../../components/MovieContainer';
import Movie from '../../components/Movie';
import { actionCreator } from '../../actions/genres';

describe('MovieContainer component', () => {
	describe('getGenreLabels', () => {
		const genreIds = [12, 28, 53];
		const genres = [
			{
				id: 12,
				name: 'action'
			},
			{
				id: 28,
				name: 'thriller'
			},
			{
				id: 53,
				name: 'comedy'
			}
		];

		test('Should return genre labels from ids passed in', () => {
			const result = getGenreLabels(genreIds, genres);

			expect(result).toEqual(['action', 'thriller', 'comedy']);
		});

		test('Should render Movie component with correct props', () => {
			const wrapper = shallow(
				<MovieContainer
					genreIds={genreIds}
					genres={genres}
					imagePath={'path/to/image'}
					title={'test-title'}
					movieKey={1}
				/>
			);

			expect(wrapper.find(Movie)).toHaveLength(1);
			expect(wrapper.find(Movie).prop('genreLabels')).toEqual(['action', 'thriller', 'comedy']);
			expect(wrapper.find(Movie).prop('imagePath')).toBe('path/to/image');
			expect(wrapper.find(Movie).prop('title')).toBe('test-title');
			expect(wrapper.find(Movie).prop('movieKey')).toBe(1);
		});
	});
});