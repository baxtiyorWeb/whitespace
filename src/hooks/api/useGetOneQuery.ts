import { api } from '@/config/auth/api';
import { useQuery } from '@tanstack/react-query';

const fetchRequest = async (url: string, params: object) => {
	const response = await api.get(url, { params });
	return response.data;
};

const useGetOneQuery = ({
	id = null,
	key = 'get-one',
	url = 'test',
	enabled = true,
	params = {},
}) => {
	const query = useQuery({
		queryKey: [key, id],
		queryFn: () => fetchRequest(url, params),
		enabled,
	});

	return query;
};

export default useGetOneQuery;
