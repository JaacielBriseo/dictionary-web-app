import { useTheme } from '../hooks';
import { DropdownFontSelector, ThemeToggler } from '.';

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div className='flex justify-between'>
			<img src='/images/logo.svg' alt='Dictionary' />
			<div className='flex justify-between items-center w-1/2'>
				<DropdownFontSelector />
				<div className='bg-[#979797] w-[1px] h-[32px]' />
				<div className='flex items-center space-x-2'>
					<ThemeToggler className='h-5' />
					<img src={`/images/${theme !== 'dark' ? 'icon-moon' : 'icon-moon-dark'}.svg`} alt='moon' />
				</div>
			</div>
		</div>
	);
};
