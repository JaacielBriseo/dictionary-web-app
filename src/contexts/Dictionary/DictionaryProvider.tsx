import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { DictionaryContext } from './DictionaryContext';
import { AxiosResponse } from 'axios';
import { DictionaryResponse } from '../../interfaces/interfaces';
import { dictionaryApi } from '../../api/dictionaryApi';

interface Props {
	children: ReactNode;
}
export const DictionaryProvider: React.FC<Props> = ({ children }) => {
	const [data, setData] = useState<DictionaryResponse>();
	const [query, setQuery] = useState('');
	const [inputValue, setInputValue] = useState('');
	const debounceRef = useRef<ReturnType<typeof setTimeout>>();

	const fetchData = useCallback(async () => {
		const response: AxiosResponse<DictionaryResponse> = await dictionaryApi.get(`/${query}`);
		setData(response.data);
	}, [query]);

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			setQuery(event.target.value);
		}, 1000);
	};

	useEffect(() => {
		if (query === '') return;
		fetchData();
	}, [fetchData, query]);

	return (
		<DictionaryContext.Provider
			value={{
				data,
				query,
				inputValue,
				setInputValue,
				fetchData,
				onQueryChange,
			}}>
			{children}
		</DictionaryContext.Provider>
	);
};
