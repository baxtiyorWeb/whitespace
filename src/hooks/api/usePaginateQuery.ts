import { api } from '@/config/auth/api';
import { useQuery } from '@tanstack/react-query';

interface UsePaginateQueryProps {
	key?: string;
	url?: string;
	page?: number;
	params?: Record<string, unknown>;
	showSuccessMsg?: boolean;
	showErrorMsg?: boolean;
	enabled?: boolean;
}

const usePaginateQuery = ({
	key = 'get-all',
	url = '/',
	page = 0,
	params = {},
	enabled = true,
}: UsePaginateQueryProps) => {
	const { isLoading, isError, data, error, isFetching, refetch } =
		useQuery<Error>({
			queryKey: [key, page, params],
			queryFn: async () => {
				const response = await api.get(`${url}?page=${page}`, {
					params,
				});
				return response.data;
			},
			enabled,
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

export default usePaginateQuery;
