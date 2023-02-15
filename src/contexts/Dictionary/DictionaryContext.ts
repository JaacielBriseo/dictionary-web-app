import { ChangeEvent, createContext } from 'react';
import { DictionaryResponse } from '../../interfaces/interfaces';

interface DictionaryContextValues {
	data: DictionaryResponse[] | undefined;
	query: string;
	error: string | null;
	onQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DictionaryContext = createContext({} as DictionaryContextValues);
