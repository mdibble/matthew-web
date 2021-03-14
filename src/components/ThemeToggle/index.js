import { connect } from 'react-redux';
import { changeTheme } from '../../store/actions';

import { Theme } from '../../theme/types';

import styled from 'styled-components';

import moon from './moon.svg';

const ThemeButton = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: none;
	outline: none;
	background-color: ${props => props.theme.secondary};
	cursor: pointer;
	img {
		background: none;
		width: 30px;
		height: 30px;
		filter: ${props => props.theme.svg};
	}
	:hover {
		background-color:  ${props => props.theme.secondaryInverse};
		img {
			filter: ${props => props.theme.svgInverse};
		}
	}
`;

function ThemeToggle(props) {
	return (
		<ThemeButton onClick={() => props.changeTheme(props.theme === Theme.Light ? Theme.Dark : Theme.Light)}>
			<img src={moon} alt="moon"/>
		</ThemeButton>
	);
}

const mapStateToProps = state => {
	const { theme } = state;
	return { theme };
}

export default connect(
	mapStateToProps,
	{ changeTheme }
)(ThemeToggle);