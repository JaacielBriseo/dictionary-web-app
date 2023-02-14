import { DictionaryResponse } from "../../interfaces/interfaces";

interface State {
  data?: DictionaryResponse;
  query: string;
  inputValue: string;
}

type Action =
  | { type: 'set_data'; payload: DictionaryResponse }
  | { type: 'set_query'; payload: string }
  | { type: 'set_input_value'; payload: string };

export const dictionaryReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set_data':
      return { ...state, data: action.payload };
    case 'set_query':
      return { ...state, query: action.payload };
    case 'set_input_value':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};