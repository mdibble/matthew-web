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
        Nice to meet you! I'm Matthew, a 5A university student in Waterloo, Ontario.
        I'm a candidate for a BSc in Computer Science, as well as a BBA.
        I'm expected to graduate in August 2023.
        `}
      </Paragraph>
      <Break />
      {landingPage
        && <Link to="/about" style={{ fontSize: '20px' }}>Learn more...</Link>}
    </>
  );
}

export default Home;
