import { useDictionaryContext } from '../hooks';
import { useState, useEffect } from 'react';
export const SearchBar = () => {
	const { data, inputValue, handleInputValueChange } = useDictionaryContext();
	const [isTouched, setIsTouched] = useState(false);
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
				onChange={e => handleInputValueChange(e.target.value)}
				onBlur={() => {
					if (inputValue.length) return;
					setIsTouched(true);
				}}
				className={`w-full h-12 px-5 rounded-xl font-bold cursor-pointer border caret-Purplish focus:border-Purplish focus:cursor-text bg-Gray bg-[url(/images/icon-search.svg)] bg-no-repeat bg-right-15 dark:bg-Dark dark:text-white ${
					isTouched ? ' border-SoftRed' : ''
				}`}
			/>
			{isTouched && <span className='text-SoftRed'>Whoops, can't be empty...</span>}
		</>
	);
};
