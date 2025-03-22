import { api } from '@/config/auth/api';
import { useInfiniteQuery } from '@tanstack/react-query';

interface Elements {
	[key: string]: null;
}

interface MetaData {
	currentPage: number;
	totalPages: number;
}

interface ApiResponse {
	data: null;
	meta?: MetaData;
}

interface UseInfiniteScrollQueryProps {
	key?: string;
	url?: string;
	elements?: Elements;
	initialPageParam?: number;
	enabled?: boolean;
}

const useInfiniteScrollQuery = ({
	key = 'infinite-query',
	url = '/',
	elements = {},
	initialPageParam = 1,
	enabled = true,
}: UseInfiniteScrollQueryProps) => {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		refetch,
		isLoading,
		isFetching,
		isError,
		error,
		isFetchingNextPage,
	} = useInfiniteQuery<ApiResponse, Error>({
		queryKey: [key, url, elements],
		queryFn: async ({ pageParam }) => {
			const response = await api.post<ApiResponse>(url, {
				page: pageParam,
				...elements,
			});
			return response.data;
		},
		initialPageParam,
		getNextPageParam: lastPage => {
			const currentPage = lastPage?.meta?.currentPage ?? 1;
			const totalPages = lastPage?.meta?.totalPages ?? 1;
			return currentPage < totalPages ? currentPage + 1 : undefined;
		},
		enabled,
	});

	return {
		data,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
		refetch,
		isLoading,
		isFetching,
		isError,
		error,
	};
};

export default useInfiniteScrollQuery;
