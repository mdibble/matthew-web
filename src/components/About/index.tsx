import { Link } from 'react-router-dom';

import Home from '../Home';
import { Break, EndBreak, Paragraph } from '../Common';

function About(): JSX.Element {
  return (
    <>
      <Home landingPage={false} />
      <Paragraph>
        {`
          Tech has always been one of my biggest passions and it's the field I want to work in full-time.
          I always like learning new things, and have a constantly-growing mental list of what I want to dip my toes into next.
        `}
      </Paragraph>
      <Break />
      <Paragraph>
        {`
          The fields of computer science I'm currently the most interested in include: 
        `}
      </Paragraph>
      <Paragraph>
        <strong>
          {`
            Emulation, modern programming languages, computer graphics, compilers, and web development.
          `}
        </strong>
      </Paragraph>
      <Break />
      <Paragraph>
        {`
          And here's what I'm either currently learning or planning on learning next: 
        `}
      </Paragraph>
      <Paragraph>
        <strong>
          {`
            TypeScript, Golang, GraphQL, OpenGL, and GUI programming.
          `}
        </strong>
      </Paragraph>
      <Break />
      <Paragraph>
        {`
          If you want to know more about the tech I enjoy using, refer to the  
        `}
        <Link to="/projects" style={{ fontSize: '26px' }}>projects</Link>
        {`
          page.
        `}
      </Paragraph>
      <Break />
      <Paragraph>
        {`
          Outside of tech, I like watching sports, movies, and listening to music.
          I also used to be an avid photographer and am hoping to get back into that hobby soon.
        `}
      </Paragraph>
      <EndBreak />
    </>
  );
}

export default About;