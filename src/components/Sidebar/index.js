import ThemeToggle from '../ThemeToggle';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
	margin-bottom: 10px;
`;

const SidebarBreak = styled.div`
	background-color: ${props => props.theme.secondary};
	margin-top: 20px;
	margin-bottom: 20px;
	height: 1px;
	width: 80%;
`;

function Sidebar() {
	return (
        <SidebarWrapper>
			<SidebarTitle>
				<Link to ="/" style={{textDecoration: "none"}}>Matthew Dibble</Link>
			</SidebarTitle>
			<SidebarItem>
				<Link to ="/projects" style={{textDecoration: "none"}}>Projects</Link>
			</SidebarItem>
			<SidebarItem>
				<Link to ="/resume" style={{textDecoration: "none"}}>Resume</Link>
			</SidebarItem>
			<SidebarBreak />
			<SidebarItem href="https://www.github.com/mdibble" target="_blank" rel="noopener noreferrer">GitHub</SidebarItem>
			<SidebarItem href="https://www.linkedin.com/in/matthew-b-dibble/" target="_blank" rel="noopener noreferrer">LinkedIn</SidebarItem>
			<SidebarBreak />
			<ThemeToggle />
        </SidebarWrapper>
	);
}
export default Sidebar;