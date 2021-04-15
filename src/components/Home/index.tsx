import styled from 'styled-components';

const Portrait = styled.img`
  height: 100px;
  border: 4px solid;
  border-color: ${(props) => props.theme.secondary};
  border-radius: 100%;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Break = styled.div`
  height: 40px;
`;

const BioPara = styled.p`
  font-size: 26px;
`;

function Home(): JSX.Element {
  return (
    <>
      <TitleContainer>
        <Portrait src="/assets/portrait.png" alt="portrait" />
        <h1>Hello!</h1>
      </TitleContainer>
      <Break />
      <BioPara>
        {`
        Nice to meet you! I'm Matthew, a 3B university student in Waterloo, Ontario,
        expected to graduate in August 2023.
        `}
      </BioPara>
      <Break />
      <BioPara>
        {`
        I'm actively seeking a software development co-op for the Fall 2021 term with
        particular interests in web development (backend or frontend) or systems
        programming.
        `}
      </BioPara>
      <Break />
    </>
  );
}

export default Home;
