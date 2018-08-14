import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY

export default () => {
	const getNowPlaying = async () => {
		const { data } = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);

		console.log('***** ', data);

		return data;
	}

	const getGenres = async () => {
		const { data } = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);

		return data;
	}

	return {
		getNowPlaying,
		getGenres
	}
};