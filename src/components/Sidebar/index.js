import ThemeToggle from '../ThemeToggle';

import styled from 'styled-components';

const SidebarWrapper = styled.div`
	width: 20%;
	position: absolute;
	left: 5%;
	top: 5%;
	border: none;
	outline: none;
	a {
		display: block;
	}
`;

function Sidebar() {
	return (
        <SidebarWrapper>
			<h1>Matthew Dibble</h1>
			<a href="about">About</a>
			<a href="about">Projects</a>
			<a href="about">Resume</a>
			<ThemeToggle />
        </SidebarWrapper>
	);
}
export default Sidebar;