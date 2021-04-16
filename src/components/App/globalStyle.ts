import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../theme';

type Props = {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    transition: 0.3s ease;
    transition-property: color, background-color, border-color;
    color: ${(props: Props) => props.theme.primaryText};
    background-color: ${(props: Props) => props.theme.primary};
    font-family: system-ui;
  }
`;

export default GlobalStyle;
