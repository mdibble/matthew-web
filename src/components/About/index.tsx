import { Link } from 'react-router-dom';

import Home from '../Home';
import { Break, EndBreak, Paragraph } from '../Common';

function About(): JSX.Element {
  return (
    <>
      <Home landingPage={false} />
      <Paragraph>
        {`
          My current fields of interest include: 
        `}
      </Paragraph>
      <Paragraph>
        <strong>
          {`
            Real time ray tracing, physically based graphics pipelines, and GPU-driven rendering.
          `}
        </strong>
      </Paragraph>
      <Break />
      <Paragraph>
        {`
          If you want to know more about the tech I enjoy using, refer to the  
        `}
        <Link to="/projects" style={{ fontSize: '20px' }}>projects</Link>
        {`
          page.
        `}
      </Paragraph>
      <Break />
      <Paragraph>
        {`
          If you want to get in touch I would love to hear from you! You can do that on
        `}
        <Link to="/contact" style={{ fontSize: '20px' }}>this</Link>
        {`
        page.
        `}
      </Paragraph>
      <EndBreak />
    </>
  );
}

export default About;
