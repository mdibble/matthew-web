import { Title, Break } from '../Common';
import Post from './Post';
import ThoughtsJSON from '../../data/thoughts.json';

function Thoughts(): JSX.Element {
  const posts = ThoughtsJSON.map((thought) => (
    <div key={thought.date}>
      <Post
        title={thought.title}
        date={thought.date}
        icon={thought.icon}
        writing={thought.writing}
      />
    </div>
  ));

  return (
    <>
      <Title>My Thoughts</Title>
      <Break />
      {posts}
    </>
  );
}

export default Thoughts;
