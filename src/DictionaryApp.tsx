import { useContext } from 'react';
import { Navbar } from './components/Navbar';
import { useTheme } from './hooks/useTheme';
import { DictionaryContext } from './contexts/Dictionary/DictionaryContext';

export const DictionaryApp = () => {
	const { font } = useTheme();
	const { inputValue, onQueryChange, setInputValue, data } = useContext(DictionaryContext);

	return (
		<div className={`p-5 bg-white dark:bg-VeryDark ${font}`}>
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
