import { connect } from 'react-redux';
import { changeTheme } from './store/actions';

import { Theme } from './store/enum/theme';

function Button(props) {
	return (
		<button onClick={() => props.changeTheme(props.theme === Theme.Light ? Theme.Dark : Theme.Light)}> 
			{props.theme}	
		</button>
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