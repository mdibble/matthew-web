import styled from 'styled-components';

import { Link } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle';
import Social from '../Socials';

const SidebarWrapper = styled.div`
  width: 20%;
  position: fixed;
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
  margin-bottom: 40px;
`;

const SidebarBreak = styled.div`
  background-color: ${(props) => props.theme.secondary};
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  width: 80%;
`;

function Sidebar(): JSX.Element {
  return (
    <SidebarWrapper>
      <SidebarTitle>
        <Link to="/" style={{ textDecoration: 'none' }}>Matthew Dibble</Link>
      </SidebarTitle>
      <Social link="https://www.github.com/mdibble" type="github" />
      <Social link="https://www.linkedin.com/in/matthew-b-dibble/" type="linkedin" />
      <SidebarBreak />
      <SidebarItem>
        <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
      </SidebarItem>
      <SidebarItem>
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Resume</a>
      </SidebarItem>
      <SidebarBreak />
      <ThemeToggle />
    </SidebarWrapper>
  );
}
export default Sidebar;