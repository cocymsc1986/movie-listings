import React from 'react';

import { AppContainer } from '../../components/AppContainer';
import App from '../../components/App';

describe('AppContainer component', () => {
	let wrapper;
	const mockGetGenres = jest.fn();
	const mockGetLatest = jest.fn();

	const props = {
		getGenres: mockGetGenres,
		getLatest: mockGetLatest,
		genres: {
			data: {
				genres: [
					{
						id: 1,
						name: 'Action'
					},
					{
						id: 2,
						name: 'Adventure'
					},
					{
						id: 3,
						name: 'Comedy'
					},
					{
						id: 4,
						name: 'Romance'
					}
				],
			},
			loading: false
		},
		movies: {
			data: {
				results: [
					{
						name: 'test-genres',
						popularity: 5,
						genre_ids: [2, 3]
					},
					{
						name: 'test-genres',
						popularity: 5,
						genre_ids: [3, 4]
					}
				]
			},
			loading: false
		}
	}

	beforeEach(() => {
		wrapper = shallow(<AppContainer {...props} />);
	});

	test('On component mount should call actions', () => {
		expect(mockGetGenres).toHaveBeenCalled();
		expect(mockGetLatest).toHaveBeenCalled();
	});

	test('updateScoreFilter should update state', () => {
		wrapper.instance().updateScoreFilter({ target: { value: 1 } } );
		expect(wrapper.state().score_filter).toBe(1);
	});

	test('filterGenres should return filtered genre list', () => {
		wrapper.instance().filterGenres();
		expect(wrapper.state().genres).toEqual([
			{
				id: 2,
				name: 'Adventure'
			},
			{
				id: 3,
				name: 'Comedy'
			},
			{
				id: 4,
				name: 'Romance'
			}
		]);
	});

	test('clickCheckBox should update state', () => {
		wrapper.instance().clickCheckBox({ target: { children: [{}, { value: 1, checked: false }], classList: { add: () => {}} } } );
		expect(wrapper.state().genre_filter).toEqual([1]);
	});

	test('filterMovies should return filtered movies from state filters', () => {
		const movies = [
			{
				genre_ids: [12, 14, 18, 24],
				vote_average: 8.1,
				name: 'Armageddon'
			},
			{
				genre_ids: [14, 24],
				vote_average: 9,
				name: 'Blues Brothers'
			},
			{
				genre_ids: [12, 14, 29],
				vote_average: 6,
				name: 'Avengers Assemble'
			},
		];

		wrapper.setState({
			genre_filter: [12, 14],
			score_filter: 7
		});

		const result = wrapper.instance().filterMovies(movies);

		expect(result).toEqual([
			{
				genre_ids: [12, 14, 18, 24],
				vote_average: 8.1,
				name: 'Armageddon'
			}
		]);

	});

	test('Should render <App /> with correct props', () => {
		wrapper.setState({
			genres: 'test-genres',
			movies: 'test-movies',
			score_filter: 1
		});

		expect(wrapper.find(App).prop('genres')).toBe('test-genres');
		expect(wrapper.find(App).prop('movies')).toBe('test-movies');
		expect(wrapper.find(App).prop('score_filter')).toBe(1);
		expect(wrapper.find(App).prop('genresLoading')).toBe(false);
		expect(wrapper.find(App).prop('moviesLoading')).toBe(false);
	});

	test('Should render', () => {
		expect(wrapper).toMatchSnapshot();
	});
});