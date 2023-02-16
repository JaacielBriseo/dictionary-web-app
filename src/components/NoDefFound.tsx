import { useDictionaryContext } from '../hooks';

export const NoDefFound = () => {
	const { error } = useDictionaryContext();
	if (!error) {
		return null;
	}
	return (
		<div className='flex flex-col items-center justify-center space-y-4'>
			<img src='/images/sad.svg' alt='sad' />
			<h1 className='font-bold text-xl text-Dark dark:text-white'>No definitions found</h1>
			<p className='text-center text-VeryGray'>{error}</p>
		</div>
	);
};
