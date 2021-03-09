import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		transition: 0.5s ease;
		transition-property: color, background-color;
		color: ${props => props.theme.text_primary};
 		background-color: ${props => props.theme.primary};
	}	
`;

export default GlobalStyle;