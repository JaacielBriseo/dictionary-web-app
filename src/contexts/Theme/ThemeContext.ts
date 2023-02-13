import { createContext } from 'react';

export type Font = 'font-mono' | 'font-serif' | 'font-sans';

interface ThemeContextValues {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	font: Font;
	setFont: React.Dispatch<React.SetStateAction<Font>>;
}
export const ThemeContext = createContext({} as ThemeContextValues);
