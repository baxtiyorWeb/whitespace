import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

type PutRequestProps = {
	url: string;
	attributes?: Record<string, null> | unknown;
	config?: AxiosRequestConfig;
};

const putRequest = async ({
	url,
	attributes,
	config = {},
}: PutRequestProps): Promise<AxiosResponse> => {
	return api.put(url, attributes, config);
};

type UsePutQueryProps = {
	hideSuccessToast?: boolean;
	listKeyId?: string | null;
};

const usePutQuery = ({
	hideSuccessToast = false,
	listKeyId = null,
}: UsePutQueryProps) => {
	const queryClient = useQueryClient();

	const { mutate, isPending, isError, error } = useMutation<
		AxiosResponse,
		Error,
		PutRequestProps
	>({
		mutationFn: putRequest,
		onSuccess: data => {
			if (!hideSuccessToast) {
				console.log('✅ Success:', data);
			}
			if (listKeyId) {
				queryClient.invalidateQueries({ queryKey: [listKeyId] });
			}
		},
		onError: err => {
			console.error('❌ Error:', err);
		},
	});

	return {
		mutate,
		isPending,
		isError,
		error,
	};
};

export default usePutQuery;
