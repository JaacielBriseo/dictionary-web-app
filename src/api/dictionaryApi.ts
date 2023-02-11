import axios from 'axios';

export const dictionaryApi = axios.create({
	baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
});
