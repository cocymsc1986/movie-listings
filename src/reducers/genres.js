const defaultState = {
	data: [],
	error: null,
	loading: false
}

export default (state = defaultState, { type, genres, error }) => {
  switch (type) {
		case 'GET_GENRES_REQUEST':
      return state = {
				...state,
				loading: true
			}
		case 'GET_GENRES_SUCCESS':
			return state = { 
				...state,
				data: genres,
				loading: false
			}
		case 'GET_GENRES_ERROR':
      return state = {
				...state,
				error,
				loading: false
			}
    default:
      return state
  }
}