import { DictionaryResponse } from '../../interfaces/interfaces';

interface State {
	data?: DictionaryResponse[] | undefined;
	query: string;
	error: null | string;
}

type Action =
	| { type: 'set_data'; payload: DictionaryResponse[] }
	| { type: 'set_error'; payload: string }
	| { type: 'set_query'; payload: string }

export const dictionaryReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'set_data':
			return { ...state, data: action.payload };
		case 'set_query':
			return { ...state, query: action.payload };
		case 'set_error':
			return { ...state, error: action.payload };
		default:
			return state;
	}
};
