const defaultState = {
	data: [],
	error: null,
	loading: true
}

export default (state = defaultState, { type, movies, error }) => {
  switch (type) {
		case 'GET_LATEST_REQUEST':
      return state = {
				...state,
				loading: true
			}
		case 'GET_LATEST_SUCCESS':
			return state = { 
				...state,
				data: movies,
				loading: false
			}
		case 'GET_LATEST_ERROR':
      return state = {
				...state,
				error,
				loading: false
			}
    default:
      return state
  }
}