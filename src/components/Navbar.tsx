import { useTheme } from '../hooks/useTheme';
import { ThemeToggler } from './ThemeToggler';

export const Navbar = () => {
  const {theme} = useTheme()
	return (
		<div className='flex justify-between'>
			<img src='/images/logo.svg' alt='Dictionary' />
			<div className='flex justify-between items-center w-1/2'>
				<div className='flex space-x-2 items-center'>
					<p className='font-bold text-sm leading-6 text-LightDark dark:text-white font-mono'>Mono</p>
					<img src='/images/icon-arrow-down.svg' alt='arrow' className='w-3 h-[6px]' />
				</div>
				<div className='bg-[#979797] w-[1px] h-[32px]' />
				<div className='flex items-center space-x-2'>
					<ThemeToggler className='h-5' />
					<img src={`/images/${theme !== 'dark'? 'icon-moon' :'icon-moon-dark'}.svg`} alt='moon' className='dark:text-Purplish'/>
				</div>
			</div>
		</div>
	);
};
