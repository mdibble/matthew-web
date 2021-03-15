import React from 'react';

import GlobalStyle from './GlobalStyle';

import Sidebar from '../Sidebar';

import { ThemeProvider } from 'styled-components';
import { getTheme } from '../../theme';
import { useSelector } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../store'; 

import Home from '../Home';
import Projects from '../Projects';
import Resume from '../Resume';

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
    const theme = useSelector(state => state.theme.theme);
    return (
        <ConnectedRouter history={history}>
            <ThemeProvider theme={getTheme(theme)}>
                <Sidebar />
                <ContentContainer>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/resume">
                            <Resume />
                        </Route>
                    </Switch>
                </ContentContainer>
                <GlobalStyle />
            </ThemeProvider>
        </ConnectedRouter>
      );
}

export default App;