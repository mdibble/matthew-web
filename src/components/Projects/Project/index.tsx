type Props = {
  name: string
  tech: string
}

function Project(props: Props): JSX.Element {
  const { name, tech } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{tech}</h3>
    </div>
  );
}

export default Project;
