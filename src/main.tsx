import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from './contexts/Theme/ThemeProvider';
import { DictionaryApp } from './DictionaryApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<DictionaryApp />
		</ThemeContextProvider>
	</React.StrictMode>
);
