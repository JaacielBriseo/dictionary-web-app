import { useTheme } from './hooks';
import { DataRenderer, Navbar, SearchBar } from './components';

export const DictionaryApp = () => {
	const { font } = useTheme();

	return (
		<div className={`px-7 py-5 space-y-7 lg:w-3/5 lg:mx-auto ${font}`}>
			<Navbar />
			<SearchBar />
			<DataRenderer />
		</div>
	);
};
