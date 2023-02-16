import { DictionaryResponse, DictionaryState } from '../../interfaces';

type Action =
	| { type: 'set_data'; payload: DictionaryResponse[] }
	| { type: 'set_error'; payload: string | null }
	| { type: 'set_query'; payload: string }
	| { type: 'set_input'; payload: string };

export const dictionaryReducer = (state: DictionaryState, action: Action): DictionaryState => {
	switch (action.type) {
		case 'set_data':
			return { ...state, data: action.payload };
		case 'set_query':
			return { ...state, query: action.payload };
		case 'set_error':
			return { ...state, error: action.payload };
		case 'set_input':
			return { ...state, inputValue: action.payload };
		default:
			return state;
	}
};
