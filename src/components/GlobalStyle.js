import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		transition: 0.3s ease;
		transition-property: color, background-color;
		color: ${props => props.theme.primaryText};
 		background-color: ${props => props.theme.primary};
		font-family: system-ui;
	}	
`;

export default GlobalStyle;