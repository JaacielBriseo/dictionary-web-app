import { useContext } from 'react';
import { DictionaryContext } from '../contexts/Dictionary/DictionaryContext';
export const useDictionaryContext = () => useContext(DictionaryContext)