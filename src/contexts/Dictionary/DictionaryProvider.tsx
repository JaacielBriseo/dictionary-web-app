import { ReactNode, useCallback, useEffect, useReducer, useRef } from 'react';
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
	inputValue: '',
	error: null,
};

export const DictionaryProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(dictionaryReducer, initialState);
	const debounceRef = useRef<ReturnType<typeof setTimeout>>();
	const { query, data, error, inputValue } = state;

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

	const onQueryChange = (query: string) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			dispatch({ type: 'set_query', payload: query });
		}, 1000);
	};

	const handleInputValueChange = (word: string) => {
		dispatch({ type: 'set_input', payload: word });
		onQueryChange(word);
	};

	useEffect(() => {
		if (!query.length) return;
		fetchData();
	}, [fetchData, query]);
	useEffect(() => {
		dispatch({ type: 'set_error', payload: null });
	}, [data]);

	return (
		<DictionaryContext.Provider value={{ inputValue, error, data, query, handleInputValueChange }}>
			{children}
		</DictionaryContext.Provider>
	);
};
