import { useContext } from "react";
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const useTheme = () => useContext(ThemeContext)