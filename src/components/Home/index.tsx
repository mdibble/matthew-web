import { Link } from 'react-router-dom';

import {
  Break,
  Paragraph,
  Portrait,
  Title,
  TitleContainer,
} from '../Common';

type Props = {
  landingPage: boolean;
}

function Home(props: Props): JSX.Element {
  const { landingPage } = props;
  return (
    <>
      <TitleContainer>
        <Portrait src="/assets/portrait.png" alt="portrait" />
        <Title>Hello!</Title>
      </TitleContainer>
      <Break />
      <Paragraph>
        {`
        Nice to meet you! I'm Matthew, a university student from Canada.
        I'm currently working at Activision as a software engineer contributing to the Call of Duty engine.
        `}
      </Paragraph>
      <Break />
      {landingPage
        && <Link to="/about" style={{ fontSize: '20px' }}>Learn more...</Link>}
    </>
  );
}

export default Home;
