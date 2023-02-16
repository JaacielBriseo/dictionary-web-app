import { createContext } from 'react';
import { DictionaryResponse } from '../../interfaces/interfaces';

interface DictionaryContextValues {
	data: DictionaryResponse[] | undefined;
	query: string;
	error: string | null;
	inputValue: string;
	handleInputValueChange: (word: string) => void;
}

export const DictionaryContext = createContext({} as DictionaryContextValues);
