import { createContext } from 'react';
import { Font } from '../../interfaces';
interface ThemeContextValues {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	font: Font;
	setFont: React.Dispatch<React.SetStateAction<Font>>;
}
export const ThemeContext = createContext({} as ThemeContextValues);
