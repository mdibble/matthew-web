import {
  Title,
  Break,
  Paragraph,
  Hyperlink,
  ParagraphNB,
} from '../Common';

function Contact(): JSX.Element {
  return (
    <>
      <Title>Contact</Title>
      <Break />
      <Paragraph>
        {`
          I would love to get in touch with you!
          I'm readily available to talk through any of these channels:
        `}
      </Paragraph>
      <Break />
      <ParagraphNB>Email: </ParagraphNB>
      <Hyperlink href="mailto:mdibble@rogers.com">mdibble@rogers.com</Hyperlink>
      <Break />
      <ParagraphNB>Socials: </ParagraphNB>
      <Hyperlink href="https://www.linkedin.com/in/matthew-b-dibble/" target="_blank" rel="noopener noreferrer">LinkedIn</Hyperlink>
      <Break />
      <ParagraphNB>Phone: (705) 770-9989</ParagraphNB>
    </>
  );
}

export default Contact;
