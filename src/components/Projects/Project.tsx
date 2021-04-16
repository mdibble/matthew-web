import styled from 'styled-components';
import { Break } from '../Common';

type Props = {
    id: string,
    name: string,
    tech: Array<string>,
    description: string,
};

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${(props) => props.theme.secondary};
  * {
    background: none;
  }
`;

function Project(props: Props): JSX.Element {
  const {
    id,
    name,
    tech,
    description,
  } = props;

  return (
    <>
      <Container>
        <img height="100px" width="100px" src="/assets/project/hello.jpg" alt="hello" />
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>
      </Container>
      <Break />
    </>
  );
}

export default Project;
