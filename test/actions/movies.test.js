import {
	GET_LATEST_REQUEST,
	GET_LATEST_SUCCESS,
	GET_LATEST_ERROR
} from '../constants';

import {
	getLatestRequest,
	getLatestSuccess,
	getLatestError
} from '../../src/actions/movies';

describe('Movies actions', () => {
	describe('getLatestRequest', () => {
		test('Should return the correct type', () => {
			const result = getLatestRequest();

			expect(result.type).toBe(GET_LATEST_REQUEST);
		});
	});

	describe('getLatestSuccess', () => {
		test('Should return the correct type and payload', () => {
			const data = ['test'];
			const result = getLatestSuccess(data);

			expect(result.type).toBe(GET_LATEST_SUCCESS);
			expect(result.movies).toBe(['test']);
		});
	});

	describe('getLatestError', () => {
		test('Should return the correct type and error payload', () => {
			const error = 'some error';
			const result = getLatestError(error);

			expect(result.type).toBe(GET_LATEST_ERROR);
			expect(result.error).toBe('some error');
		});
	});
});