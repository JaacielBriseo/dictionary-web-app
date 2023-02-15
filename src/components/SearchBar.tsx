import { useDictionaryContext } from '../hooks';
import { useState } from 'react';
export const SearchBar = () => {
	const { onQueryChange } = useDictionaryContext();
	const [inputValue, setInputValue] = useState('');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onQueryChange(event);
		setInputValue(event.target.value);
	};
	return (
		<input
			type='text'
			name='query'
			value={inputValue}
			onChange={handleChange}
			className='w-full h-12 px-5 rounded-3xl bg-Gray bg-[url(/images/icon-search.svg)] bg-no-repeat bg-right-15 dark:bg-Dark dark:text-white'
		/>
	);
};
