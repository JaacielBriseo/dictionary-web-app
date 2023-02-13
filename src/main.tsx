import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from './contexts/Theme/ThemeProvider';
import { DictionaryApp } from './DictionaryApp';
import './index.css';
import { DictionaryProvider } from './contexts/Dictionary/DictionaryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<DictionaryProvider>
				<DictionaryApp />
			</DictionaryProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);
