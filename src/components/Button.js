import { useContext } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../store/actions';

import { Theme } from '../theme/types';

import styled, { ThemeContext } from 'styled-components';

const ThemeButton = styled.button`
`;

function Button(props) {
	const themeData = useContext(ThemeContext);
	return (
		<ThemeButton onClick={() => props.changeTheme(props.theme === Theme.Light ? Theme.Dark : Theme.Light)}>
			{themeData.name}		
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
)(Button);