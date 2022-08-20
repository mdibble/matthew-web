import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { getTheme, ThemeType } from '../../theme';

import GlobalStyle from './globalStyle';
import Sidebar from '../Sidebar';

import { history } from '../../store';
import { State } from '../../store/reducers';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import FourOhFour from '../FourOhFour';
import Thoughts from '../Thoughts';
import Post from '../Thoughts/Post';

const ContentContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    left: 20%;
    width: 70%;
  }
  position: absolute;
  margin: auto;
  top: 5%;
  left: 0%;
  right: 0%;
  width: 50%;
`;

type ContainerProps = {
  theme: ThemeType
}

const BG = styled.div`
  background-color: ${(props: ContainerProps) => props.theme.primary};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
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
              <Home landingPage />
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
            <Route exact path="/thoughts">
              <Thoughts />
            </Route>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Route exact path="/thoughts/:id" render={(props: any) => <Post title="" date={0} icon=" " writing={['']} match={props.match} />} />
            <Route>
              <FourOhFour />
            </Route>
          </Switch>
        </ContentContainer>
        <BG />
        <GlobalStyle />
      </ThemeProvider>
    </ConnectedRouter>
  );
}

export default App;
