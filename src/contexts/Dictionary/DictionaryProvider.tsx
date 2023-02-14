import { ChangeEvent, ReactNode, useCallback, useEffect, useReducer, useRef } from 'react';
import { DictionaryContext } from './DictionaryContext';
import { AxiosResponse } from 'axios';
import { DictionaryResponse } from '../../interfaces/interfaces';
import { dictionaryApi } from '../../api/dictionaryApi';
import { dictionaryReducer } from './dictionaryReducer';

interface Props {
	children: ReactNode;
}

export const DictionaryProvider: React.FC<Props> = ({ children }) => {
	const [{ data, query, inputValue }, dispatch] = useReducer(dictionaryReducer, {
		data: undefined,
		query: '',
		inputValue: '',
	});
	const debounceRef = useRef<ReturnType<typeof setTimeout>>();

	const fetchData = useCallback(async () => {
		const response: AxiosResponse<DictionaryResponse> = await dictionaryApi.get(`/${query}`);
		dispatch({ type: 'set_data', payload: response.data });
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

	const setInputValue = (value: string) => {
		dispatch({ type: 'set_input_value', payload: value });
	};

	return (
		<DictionaryContext.Provider value={{ data, query, inputValue, setInputValue, fetchData, onQueryChange }}>
			{children}
		</DictionaryContext.Provider>
	);
};
