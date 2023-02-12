import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface Props {
	children: React.ReactNode | React.ReactNode[];
}
export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
	const ThemeProvider = ThemeContext.Provider;
	const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		const root = document.documentElement;
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
		return () => root.classList.remove(theme);
	}, [theme]);

	return <ThemeProvider value={{ theme, setTheme }}>{children}</ThemeProvider>;
};
