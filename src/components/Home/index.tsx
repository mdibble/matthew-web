import styled from 'styled-components';

import { Break, Paragraph } from '../App/Global/Common';

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

function Home(): JSX.Element {
  return (
    <>
      <TitleContainer>
        <Portrait src="/assets/portrait.png" alt="portrait" />
        <h1>Hello!</h1>
      </TitleContainer>
      <Break />
      <Paragraph>
        {`
        Nice to meet you! I'm Matthew, a 3B university student in Waterloo, Ontario,
        expected to graduate in August 2023.
        `}
      </Paragraph>
      <Break />
      <Paragraph>
        {`
        I'm actively seeking a software development co-op for the Fall 2021 term with
        particular interests in web development (backend or frontend) or systems
        programming.
        `}
      </Paragraph>
      <Break />
    </>
  );
}

export default Home;
