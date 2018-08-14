import reducer from '../../reducers/movies';

import {
	GET_LATEST_REQUEST,
	GET_LATEST_SUCCESS,
	GET_LATEST_ERROR
} from '../../constants';

describe('Movies reducer', () => {
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

	test('Should update state for GET_LATEST_REQUEST', () => {
		const action = {
			type: GET_LATEST_REQUEST
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: true
		});
	});

	test('Should update state for GET_LATEST_SUCCESS', () => {
		const action = {
			type: GET_LATEST_SUCCESS,
			movies: ['test']
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: false,
			data: ['test']
		});
	});

	test('Should update state for GET_LATEST_ERROR', () => {
		const action = {
			type: GET_LATEST_ERROR,
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