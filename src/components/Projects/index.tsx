import { Break, Paragraph, Title } from '../Common';

import Project from './Project';
import projectData from '../../data/projects.json';

function Projects(): JSX.Element {
  const projects = projectData.map((project) => (
    <Project
      key={project.id}
      id={project.id}
      name={project.name}
      tech={project.tech}
      description={project.description}
      source={project.source}
    />
  ));

  return (
    <div>
      <Title>Projects</Title>
      <Break />
      <Paragraph>{'Here\'s what I\'ve been working on...'}</Paragraph>
      <Break />
      {projects}
    </div>
  );
}

export default Projects;
