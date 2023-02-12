import { createContext } from 'react';

interface ThemeContextValues {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext({} as ThemeContextValues);
