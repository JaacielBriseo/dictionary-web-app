import { useDictionaryContext } from '../hooks';
export const SearchBar = () => {
	const { inputValue, onQueryChange, setInputValue } = useDictionaryContext();
	return (
		<input
			type='text'
			name='query'
			value={inputValue}
			onChange={e => {
				onQueryChange(e);
				setInputValue(e.target.value);
			}}
			className='w-full h-12 px-5 rounded-3xl bg-Gray bg-[url(/images/icon-search.svg)] bg-no-repeat bg-right-15 dark:bg-Dark dark:text-white'
		/>
	);
};
