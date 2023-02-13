import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Font } from '../contexts/Theme/ThemeContext';

export const DropdownFontSelector = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { font, setFont } = useTheme();
	const fontsOptions: Font[] = ['font-mono', 'font-sans', 'font-serif'];
	return (
		<div className='flex space-x-2 items-center relative'>
			<p className='font-bold text-sm leading-6 text-LightDark dark:text-white capitalize'>
				{font.replace('font-', '')}
			</p>
			<button onClick={() => setIsDropdownOpen(current => !current)}>
				<img src='/images/icon-arrow-down.svg' alt='arrow' className='w-3 h-[6px]' />
			</button>
			<div
				className={`${
					isDropdownOpen ? 'flex flex-col' : 'hidden'
				} bg-white text-Dark w-[120px] h-[100px] z-10 absolute -bottom-24 right-0 p-2 rounded-lg shadow-lg border`}>
				<div className='w-full h-full justify-evenly flex flex-col'>
					{fontsOptions.map(fontOption => (
						<p key={fontOption} className={`block ${fontOption} capitalize`} onClick={() => setFont(fontOption)}>
							{fontOption.replace('font-', '')}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};
