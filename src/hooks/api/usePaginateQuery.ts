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

interface ApiResponse {
	data: unknown;
}

const usePaginateQuery = ({
	key = 'get-all',
	url = '/',
	page = 0,
	params = {},
	enabled = true,
}: UsePaginateQueryProps) => {
	const { isLoading, isError, data, error, isFetching, refetch } = useQuery<
		ApiResponse,
		Error
	>({
		queryKey: [key, page, params],
		queryFn: async () => {
			const response = await api.get<ApiResponse>(`${url}?page=${page}`, {
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
