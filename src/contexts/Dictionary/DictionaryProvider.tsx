import { ChangeEvent, ReactNode, useCallback, useEffect, useReducer, useRef } from 'react';
import { DictionaryResponse, ErrorResponse } from '../../interfaces';
import { AxiosError, AxiosResponse } from 'axios';
import { dictionaryApi } from '../../api/dictionaryApi';
import { dictionaryReducer, DictionaryContext } from '.';

interface Props {
	children: ReactNode;
}
const initialState = {
	data: undefined,
	query: '',
	error: null,
};

export const DictionaryProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(dictionaryReducer, initialState);
	const debounceRef = useRef<ReturnType<typeof setTimeout>>();
	const { query, data, error } = state;

	const fetchData = useCallback(async () => {
		await dictionaryApi
			.get<DictionaryResponse[]>(`/${query}`)
			.then((response: AxiosResponse<DictionaryResponse[]>) => {
				dispatch({ type: 'set_data', payload: response.data });
			})
			.catch((err: AxiosError<ErrorResponse>) => {
				if (err.response) {
					const { data } = err.response;
					dispatch({ type: 'set_error', payload: `${data.message} ${data.resolution}` });
				}
			});
	}, [query]);

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			dispatch({ type: 'set_query', payload: event.target.value });
		}, 1000);
	};

	useEffect(() => {
		if (!query.length) return;
		fetchData();
	}, [fetchData, query]);

	return (
		<DictionaryContext.Provider value={{ error, data, query, onQueryChange }}>{children}</DictionaryContext.Provider>
	);
};
