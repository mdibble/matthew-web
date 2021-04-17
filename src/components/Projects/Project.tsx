import styled from 'styled-components';
import { Break, BreakMini } from '../Common';

type Props = {
    id: string,
    name: string,
    tech: Array<string>,
    description: string,
    source: string,
};

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  * {
    background: none;
  }
  border-radius: 30px;
`;

const ImageContainer = styled.div`
  margin: 20px;
  overflow: hidden;
  height: 100px;
  border-radius: 20px;
  img {
    height: 100px;
    width: 100px;
  }
`;

const InfoContainer = styled.div`
  margin: 20px;
  margin-left: 0px;
  p {
    font-size: 26px;
  }
  flex: 1;
`;

const TechListing = styled.span`
  font-size: 26px;
`;

const ProjectTitle = styled.a`
  font-size: 26px;
  display: block;
  font-weight: bold;
`;

function Project(props: Props): JSX.Element {
  const {
    id,
    name,
    tech,
    description,
    source,
  } = props;

  let mappedTech: JSX.Element[] = [];
  if (tech.length > 1) {
    mappedTech = tech.slice(0, tech.length - 1).map((techItem) => (
      <TechListing key={techItem}>
        {techItem}
        {', '}
      </TechListing>
    ));
  }
  if (tech.length > 0) {
    mappedTech.push(
      <TechListing key={tech[tech.length - 1]}>
        {tech[tech.length - 1]}
      </TechListing>,
    );
  }

  return (
    <>
      <Container>
        <ImageContainer><img src={`/assets/project/${id}.jpg`} alt={id} /></ImageContainer>
        <InfoContainer>
          <ProjectTitle href={source} target="_blank" rel="noopener noreferrer">{name}</ProjectTitle>
          {mappedTech}
          <BreakMini />
          <p>{description}</p>
        </InfoContainer>
      </Container>
      <Break />
    </>
  );
}

export default Project;
