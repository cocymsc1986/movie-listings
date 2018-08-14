import moxios from 'moxios';
import serviceCreator from '../../services';

describe('Services', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	const { getGenres, getNowPlaying } = serviceCreator();

	test('getGenres', (done) => {
		getGenres();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();

			request.respondWith({
				status: 200,
				response: {}
			}).then(() => {
				expect(request.config.method).toEqual('get');
				expect(request.url).toContain('/genre/movie/list');
				done();
			});
		});
	});

	test('getNowPlaying', (done) => {
		getNowPlaying();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();

			request.respondWith({
				status: 200,
				response: {}
			}).then(() => {
				expect(request.config.method).toEqual('get');
				expect(request.url).toContain('/movie/now_playing');
				done();
			});
		});
	});
});