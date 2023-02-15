import { useEffect, useState } from 'react';
import { ThemeContext } from '.';
import { Font } from '../../interfaces';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}
export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
	const ThemeProvider = ThemeContext.Provider;
	const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
	const [font, setFont] = useState<Font>('font-mono');

	useEffect(() => {
		const root = document.documentElement;
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
		return () => root.classList.remove(theme);
	}, [theme]);

	return <ThemeProvider value={{ theme, setTheme, font, setFont }}>{children}</ThemeProvider>;
};
