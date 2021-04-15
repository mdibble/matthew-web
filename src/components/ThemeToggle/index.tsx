import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeTheme } from '../../store/actions';
import { State } from '../../store/reducers';
import { Theme } from '../../theme';

const ThemeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.secondary};
  cursor: pointer;
  img {
    background: none;
    width: 25px;
    height: 25px;
    filter: ${(props) => props.theme.svg};
  }
  :hover {
    background-color:  ${(props) => props.theme.secondaryInverse};
    img {
      filter: ${(props) => props.theme.svgInverse};
    }
  }
`;

type Props = {
  theme: Theme
  changeTheme: typeof changeTheme
}

function ThemeToggle(props: Props): JSX.Element {
  return (
    <ThemeButton
      onClick={() => props.changeTheme(props.theme === Theme.Light ? Theme.Dark : Theme.Light)}
    >
      <img src="/assets/moon.svg" alt="moon" />
    </ThemeButton>
  );
}

const mapStateToProps = (state: State) => {
  const { theme } = state.theme;
  return { theme };
};

export default connect(
  mapStateToProps,
  { changeTheme },
)(ThemeToggle);
