import {
  Paragraph, TitleMini, Break, Subtitle, BreakMini,
} from '../Common';

import Icon from './Icon';

type Props = {
  title: string,
  date: number, // also serves as unique identifier
  icon: string,
  writing: Array<string>,
};

function Post(props: Props): JSX.Element {
  const {
    title, date, icon, writing,
  } = props;

  const formattedWriting = writing.map((item) => (
    <div key={item}>
      <Paragraph>{item}</Paragraph>
      <BreakMini />
    </div>
  ));

  const dateObj = new Date(0);
  dateObj.setUTCSeconds(date);
  const dateString = `${dateObj.getMonth()}/${dateObj.getDay()}/${dateObj.getFullYear()}`;

  return (
    <>
      <div>
        <div style={{ float: 'left' }}>
          <Icon icon={icon} />
        </div>
        <div style={{ float: 'left', paddingLeft: '20px' }}>
          <TitleMini>{title}</TitleMini>
          <Subtitle>{dateString}</Subtitle>
        </div>
      </div>
      <Break />
      <Break />
      {formattedWriting}
      <Break />
    </>
  );
}

export default Post;
