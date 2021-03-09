import React from 'react';
import Button from './Button';
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../theme';
import { useSelector } from 'react-redux';

function App() {
	const theme = useSelector(state => state.theme);
	return (
		<ThemeProvider theme={getTheme(theme)}>
				<Button />
			<GlobalStyle />
		</ThemeProvider>
  	);
}

export default App;