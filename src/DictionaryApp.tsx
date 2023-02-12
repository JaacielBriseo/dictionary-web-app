import { useCallback, useEffect, useState, useRef, ChangeEvent } from 'react';
import { AxiosResponse } from 'axios';
import { dictionaryApi } from './api/dictionaryApi';
import { DictionaryResponse } from './interfaces/interfaces';
import { Navbar } from './components/Navbar';

export const DictionaryApp = () => {
	const [data, setData] = useState<DictionaryResponse>();
	const [query, setQuery] = useState('');
	const [inputValue, setInputValue] = useState('');
	const debounceRef = useRef<ReturnType<typeof setTimeout>>();

	const fetchData = useCallback(async () => {
		const response: AxiosResponse<DictionaryResponse, []> = await dictionaryApi.get(`/${query}`);
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
		<div className='p-5'>
			<Navbar />
			<form className='flex flex-col justify-center items-center'>
				<input
					type='text'
					name='query'
					value={inputValue}
					onChange={e => {
						onQueryChange(e);
						setInputValue(e.target.value);
					}}
					className='border-red-500 border-4 h-10 w-4/12'
				/>
				<button type='submit' className='bg-fuchsia-400 p-4'>
					submit
				</button>
			</form>
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};
