import { useDictionaryContext } from '../hooks';
import { NoDefFound } from './NoDefFound';
import { Dictionary } from './Dictionary';

export const DataRenderer = () => {
	const { error } = useDictionaryContext();
	if (error) {
		return <NoDefFound />;
	}
	return <Dictionary />;
};
