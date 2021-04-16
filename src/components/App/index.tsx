import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import getTheme from '../../theme';

import GlobalStyle from './Global/globalStyle';
import Sidebar from '../Sidebar';

import { history } from '../../store';
import { State } from '../../store/reducers';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Resume from '../Resume';

const ContentContainer = styled.div`
    position: absolute;
    margin: auto;
    top: 5%;
    left: 0%;
    right: 0%;
    width: 50%;
`;

function App(): JSX.Element {
  const theme = useSelector((state: State) => state.theme.theme);
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={getTheme(theme)}>
        <Sidebar />
        <ContentContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
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
