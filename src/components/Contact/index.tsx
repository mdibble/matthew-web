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
          I'm available to talk through any of these channels:
        `}
      </Paragraph>
      <Break />
      <ParagraphNB>Email: </ParagraphNB>
      <Hyperlink href="mailto:dibble.matthew@outlook.com">dibble.matthew@outlook.com</Hyperlink>
      <Break />
      <ParagraphNB>Socials: </ParagraphNB>
      <Hyperlink href="https://www.linkedin.com/in/matthew-b-dibble/" target="_blank" rel="noopener noreferrer">LinkedIn</Hyperlink>
    </>
  );
}

export default Contact;
