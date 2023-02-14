import { Navbar } from './components/Navbar';
import { useTheme } from './hooks';
import { SearchBar } from './components/SearchBar';
import { DataRenderer } from './components/DataRenderer';

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
