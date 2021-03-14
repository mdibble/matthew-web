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

const SidebarItem = styled.a`
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 24px;
	text-decoration: none;
`;

const SidebarTitle = styled.h1`
	margin-bottom: 30px;
`;

const SidebarBreak = styled.div`
	background-color: ${props => props.theme.secondary};
	margin-top: 20px;
	margin-bottom: 20px;
	height: 1px;
	width: 100%;
`;

function Sidebar() {
	return (
        <SidebarWrapper>
			<SidebarTitle>Matthew Dibble</SidebarTitle>
			<SidebarItem href="about">Projects</SidebarItem>
			<SidebarItem href="about">Resume</SidebarItem>
			<SidebarBreak />
			<SidebarItem href="https://www.github.com/mdibble" target="_blank" rel="noopener noreferrer">GitHub</SidebarItem>
			<SidebarItem href="https://www.linkedin.com/in/matthew-b-dibble/" target="_blank" rel="noopener noreferrer">LinkedIn</SidebarItem>
			<SidebarBreak />
			<ThemeToggle />
        </SidebarWrapper>
	);
}
export default Sidebar;