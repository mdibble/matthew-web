import { connect } from 'react-redux';
import { changeTheme } from './store/actions';

import theme from './store/enum/theme';

function Button(props) {
	return (
		<button onClick={() => changeTheme(props.theme === theme.Light ? theme.Dark : theme.Light)}> 
			Hello
		</button>
	);
}

const mapStateToProps = state => {
	const { theme } = state;
	return { theme };
}

export default connect(mapStateToProps)(Button);