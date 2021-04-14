import Project from './Project';

function Projects(): JSX.Element {
  return (
    <div>
      <h1>Projects</h1>
      <p>{'Here\'s what I\'ve been working on...'}</p>
      <Project name="Hello" tech="React" />
    </div>
  );
}

export default Projects;
