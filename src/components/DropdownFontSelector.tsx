import { useState } from 'react';
import { useTheme } from '../hooks';
import { Font } from '../interfaces';

export const DropdownFontSelector = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { font, setFont } = useTheme();
	const fontsOptions: Font[] = ['font-mono', 'font-sans', 'font-serif'];
	return (
		<div
			onClick={() => setIsDropdownOpen(current => !current)}
			className='flex space-x-2 items-center cursor-pointer relative'>
			<p className='font-bold text-sm leading-6 text-LightDark dark:text-white capitalize'>
				{font.replace('font-', '')}
			</p>
			<img src='/images/icon-arrow-down.svg' alt='arrow' className='w-3 h-[6px]' />
			<div
				className={`${
					isDropdownOpen ? 'flex flex-col' : 'hidden'
				} bg-white w-[120px] h-[100px] z-10 absolute -bottom-24 right-0 p-2 rounded-lg shadow-lg border dark:bg-Dark dark:border-none dark:shadow-[#A445ED]`}>
				<div className='w-full h-full justify-evenly flex flex-col space-y-1'>
					{fontsOptions.map(fontOption => (
						<p
							key={fontOption}
							className={`block ${fontOption} capitalize md:font-bold hover:text-Purplish text-Dark dark:text-white`}
							onClick={() => setFont(fontOption)}>
							{fontOption.replace('font-', '')}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};
