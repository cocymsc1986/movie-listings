import {
	GET_GENRES_REQUEST,
	GET_GENRES_SUCCESS,
	GET_GENRES_ERROR
} from '../constants';

import {
	getGenresRequest,
	getGenresSuccess,
	getGenresError,
	actionCreator
} from '../../src/actions/genres';

describe('Genres actions', () => {
	describe('getGenresRequest', () => {
		test('Should return the correct type', () => {
			const result = getGenresRequest();

			expect(result.type).toBe(GET_GENRES_REQUEST);
		});
	});

	describe('getGenresSuccess', () => {
		test('Should return the correct type and payload', () => {
			const data = ['test'];
			const result = getGenresSuccess(data);

			expect(result.type).toBe(GET_GENRES_SUCCESS);
			expect(result.genres).toBe(['test']);
		});
	});

	describe('getGenresError', () => {
		test('Should return the correct type and error payload', () => {
			const error = 'some error';
			const result = getGenresError(error);

			expect(result.type).toBe(GET_GENRES_ERROR);
			expect(result.error).toBe('some error');
		});
	});

	describe('ActionCreator', async () => {
		test('Should call request and success when data is returned', () => {
			const dispatch = jest.fn();
			const getGenres = jest.fn(() => Promise.resolve([{ name: 'Con Air' }]))
			const serviceCreator = jest.fn(() => ({
				getGenres
			}));

			const actions = actionCreator(dispatch, serviceCreator);

			await actions.getGenres;

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toBeCalledWith({
				type: GET_GENRES_REQUEST
			});
			expect(dispatch).toBeCalledWith({
				type: GET_GENRES_SUCCESS,
				genres: [{ name: 'Con Air' }]
			})
		});
	});
});