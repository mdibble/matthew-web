import React from 'react';

import GlobalStyle from './GlobalStyle';

import Sidebar from '../Sidebar';

import { ThemeProvider } from 'styled-components';
import { getTheme } from '../../theme';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ContentContainer = styled.div`
    position: absolute;
    margin: auto;
    top: 5%;
    left: 0%;
    right: 0%;
    width: 50%;
`;

function App() {
    const theme = useSelector(state => state.theme);
    return (
        <ThemeProvider theme={getTheme(theme)}>
            <Sidebar />
            <ContentContainer>
            </ContentContainer>
            <GlobalStyle />
        </ThemeProvider>
      );
}

export default App;