import {
	GET_GENRES_REQUEST,
	GET_GENRES_SUCCESS,
	GET_GENRES_ERROR
} from '../constants';

import serviceCreator from '../services';

export const getGenresRequest = () => ({
	type: GET_GENRES_REQUEST
});

export const getGenresSuccess = genres => ({
	type: GET_GENRES_SUCCESS,
	genres
});

export const getGenresError = error => ({
	type: GET_GENRES_ERROR,
	error
});

// Pass in service to enable mocking in test
export const actionCreator = (ServiceCreator = serviceCreator) => {
	const getGenres = () => async dispatch => {
		dispatch(getGenresRequest);

		const tmdbService = ServiceCreator();

		try {
			const response = await tmdbService.getGenres();
			dispatch(getGenresSuccess(response));
		} catch (err) {
			dispatch(getGenresError(err))
		}
	}

	return {
		getGenres
	}
}

export default actionCreator();
