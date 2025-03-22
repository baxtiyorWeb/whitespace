'use client';
import { api } from '@/config/auth/api';
import { useQuery } from '@tanstack/react-query';

const useGetAllQuery = ({
	key = 'get-all',
	url = '/',
	params = {},
	showSuccessMsg = false,
	hideErrorMsg = false,
	enabled = true,
	options = {
		onSuccess: (res: null) => {
			if (showSuccessMsg) {
				return res;
			}
		},
		onError: (data: null) => {
			if (!hideErrorMsg) {
				return data;
			}
		},
	},
}) => {
	const { isLoading, isError, data, error, isFetching, refetch } = useQuery({
		queryKey: [key],
		queryFn: () => api.get(url, params),
		enabled,
		...options,
	});

	return {
		isLoading,
		isError,
		data,
		error,
		isFetching,
		refetch,
	};
};

export default useGetAllQuery;
