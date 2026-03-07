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
        Nice to meet you! I'm Matthew, a graphics programmer based in Toronto, Canada.
        I'm currently working at Activision contributing to the Call of Duty engine.
        `}
      </Paragraph>
      <Break />
      <Paragraph>
        {`
        Computer graphics is my passion and I want to learn as much as I can about the past, present and future of rendering.
        `}
      </Paragraph>
      <Break />
      {landingPage
        && <Link to="/about" style={{ fontSize: '20px' }}>Learn more...</Link>}
    </>
  );
}

export default Home;
