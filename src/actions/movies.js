import {
	GET_LATEST_REQUEST,
	GET_LATEST_SUCCESS,
	GET_LATEST_ERROR
} from '../constants';

import serviceCreator from '../services';

export const getLatestRequest = () => ({
	type: GET_LATEST_REQUEST
});

export const getLatestSuccess = movies => ({
	type: GET_LATEST_SUCCESS,
	movies
});

export const getLatestError = error => ({
	type: GET_LATEST_ERROR,
	error
});

export default dispatch => {
	const getLatest = async () => {
		dispatch(getLatestRequest);

		const tmdbService = serviceCreator();

		try {
			const response = await tmdbService.getLatest();
			dispatch(getLatestSuccess(response));
		} catch (err) {
			dispatch(getLatestError(err))
		}
	}

	return {
		getLatest
	}
}
