import { Navbar } from './components/Navbar';
import { useTheme, useDictionaryContext } from './hooks';
import { SearchBar } from './components/SearchBar';

export const DictionaryApp = () => {
	const { font } = useTheme();
	const { data } = useDictionaryContext();

	return (
		<div className={`p-5 space-y-7 bg-white dark:bg-VeryDark ${font}`}>
			<Navbar />
			<SearchBar />
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};
