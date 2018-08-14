import reducer from '../../reducers/genres';

import {
	GET_GENRES_REQUEST,
	GET_GENRES_SUCCESS,
	GET_GENRES_ERROR
} from '../../constants';

describe('Genres reducer', () => {
	const state = {
		test: 'test-state'
	};

	test('Should return origin state when no matching type', () => {
		const action = {
			type: 'invalid-action'
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state'
		});
	});

	test('Should update state for GET_GENRES_REQUEST', () => {
		const action = {
			type: GET_GENRES_REQUEST
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: true
		});
	});

	test('Should update state for GET_GENRES_SUCCESS', () => {
		const action = {
			type: GET_GENRES_SUCCESS,
			genres: ['test']
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: false,
			data: ['test']
		});
	});

	test('Should update state for GET_GENRES_ERROR', () => {
		const action = {
			type: GET_GENRES_ERROR,
			error: 'some-error'
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: false,
			error: 'some-error'
		});
	});
})