import { Link } from 'react-router-dom';

import {
  Paragraph, TitleMini, Break, Subtitle, BreakMini,
} from '../Common';
import Icon from './Icon';
import ThoughtsJSON from '../../data/thoughts.json';
import FourOhFour from '../FourOhFour';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: any;
  title: string,
  date: number, // also serves as unique identifier
  icon: string,
  writing: Array<string>,
};

function Post(props: Props): JSX.Element {
  let {
    title, date, icon, writing, match,
  } = props;
  let id: string | null = null;

  if (match && match.params) {
    id = match.params.id;
  }

  if (date === 0 && id && !Number.isNaN(id)) {
    let found = false;
    ThoughtsJSON.forEach((item) => {
      if (item.date === Number(id)) {
        title = item.title;
        date = item.date;
        icon = item.icon;
        writing = item.writing;
        match = item.date;
        found = true;
      }
    });
    if (!found) {
      return <FourOhFour />;
    }
  }

  const formattedWriting = writing.map((item) => (
    <div key={item}>
      <Paragraph>{item}</Paragraph>
      <BreakMini />
    </div>
  ));

  const dateObj = new Date(0);
  dateObj.setUTCSeconds(date);
  let hour = dateObj.getHours();
  const am = hour < 12;
  if (hour === 0) {
    hour = 12;
  } else {
    hour %= 12;
  }

  const dateString = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} ${hour}:${dateObj.getMinutes()} ${am ? 'AM' : 'PM'}`;

  return (
    <>
      <Link to={`/thoughts/${date}/`}>
        <div>
          <div style={{ float: 'left' }}>
            <Icon icon={icon} />
          </div>
          <div style={{ float: 'left', paddingLeft: '20px' }}>
            <TitleMini>{title}</TitleMini>
            <Subtitle>{dateString}</Subtitle>
          </div>
        </div>
      </Link>
      <Break />
      <Break />
      {formattedWriting}
      <Break />
    </>
  );
}

export default Post;
