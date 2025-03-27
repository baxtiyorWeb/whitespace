import axios from 'axios';
const getCSRFToken = () => {
	return document.cookie
		.split('; ')
		.find(row => row.startsWith('csrftoken='))
		?.split('=')[1];
};

const getToken = () => {
	return (
		localStorage.getItem('access_token') ||
		sessionStorage.getItem('access_token')
	);
};

export const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1',
});

api.interceptors.request.use(
	config => {
		const csrfToken = getCSRFToken();
		if (csrfToken) {
			config.headers['X-CSRFToken'] = csrfToken;
		}

		const token = getToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				console.log(' Refresh token so‘rovi yuborilmoqda...');

				const response = await axios.post(
					'http://127.0.0.1:8000/api/v1/auth/token/refresh/',
					{
						refresh: localStorage.getItem('refresh_token'),
					}
				);

				console.log(' Refresh token javobi:', response.data);
				localStorage.setItem('access_token', response.data.access);

				originalRequest.headers[
					'Authorization'
				] = `Bearer ${response.data.access}`;
				return api(originalRequest);
			} catch (refreshError) {
				console.error('❌ Token yangilash xatosi:', refreshError);

				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
				window.location.href = '/auth';
			}
		}

		return Promise.reject(error);
	}
);
