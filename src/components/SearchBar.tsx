import { useDictionaryContext } from '../hooks';
import { useState, useEffect } from 'react';
export const SearchBar = () => {
	const { data, onQueryChange } = useDictionaryContext();
	const [inputValue, setInputValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onQueryChange(event);
		setInputValue(event.target.value);
	};
	useEffect(() => {
		if (!data) return;
		setIsTouched(false);
	}, [data]);

	return (
		<>
			<input
				type='text'
				name='query'
				placeholder='Search for any word...'
				value={inputValue}
				onChange={handleChange}
				onBlur={() => {
					if (inputValue.length) return;
					setIsTouched(true);
				}}
				className={`w-full h-12 px-5 rounded-xl bg-Gray bg-[url(/images/icon-search.svg)] bg-no-repeat bg-right-15 dark:bg-Dark dark:text-white ${
					isTouched ? 'border border-SoftRed' : ''
				}`}
			/>
			{isTouched && <span className='text-SoftRed'>Whoops, can't be empty...</span>}
		</>
	);
};
