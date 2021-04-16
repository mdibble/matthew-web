import {
  Break,
  Paragraph,
  ParagraphNB,
  Hyperlink,
} from '../App/Global/Common';

function Contact(): JSX.Element {
  return (
    <>
      <h1>Contact</h1>
      <Break />
      <ParagraphNB>
        {`
          I would love to get in touch.
          Feel free to email me at
        `}
      </ParagraphNB>
      <Hyperlink href="mailto:mdibble@rogers.com">mdibble@rogers.com</Hyperlink>
      <ParagraphNB>
        {`
          if you'd like to talk.
        `}
      </ParagraphNB>
      <Break />
      <Paragraph>
        {`
          I can also bea reached on LinkedIn.
        `}
      </Paragraph>
      { /* Maybe include a button */ }
    </>
  );
}

export default Contact;
