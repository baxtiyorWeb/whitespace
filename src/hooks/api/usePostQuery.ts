/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

type PostRequestProps = {
	url: string;
	attributes?: Record<string, any> | null;
	config?: AxiosRequestConfig;
};

const postRequest = async ({
	url,
	attributes,
	config = {},
}: PostRequestProps): Promise<AxiosResponse> => {
	return api.post(url, attributes, config);
};

type UsePostQueryProps = {
	hideSuccessToast?: boolean;
	listKeyId?: string | null;
};

const usePostQuery = ({
	hideSuccessToast = false,
	listKeyId = null,
}: UsePostQueryProps) => {
	const queryClient = useQueryClient();

	const { mutate, isPending, isError, error } = useMutation<
		AxiosResponse,
		Error,
		PostRequestProps
	>({
		mutationFn: postRequest,
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

export default usePostQuery;
