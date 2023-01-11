import { useEffect } from 'react';

import { Title, Break, Subtitle } from '../Common';
import Post from './Post';
import ThoughtsJSON from '../../data/thoughts.json';

const timeThreshold = 1662053511;

function shouldNotifyAboutNewThoughts(): boolean {
  const mostRecentThoughtLS = localStorage.getItem('mostRecentThought');
  const mostRecentThoughtActual = ThoughtsJSON[0].date.toString();
  if (mostRecentThoughtLS !== mostRecentThoughtActual
      && parseInt(mostRecentThoughtActual, 10) >= timeThreshold) {
    return true;
  }
  return false;
}

function Thoughts(): JSX.Element {
  const posts = ThoughtsJSON.map((thought) => (thought.date > timeThreshold
    ? (
      <div key={thought.date}>
        <Post
          title={thought.title}
          date={thought.date}
          icon={thought.icon}
          writing={thought.writing}
          match={null}
        />
      </div>
    )
    : <></>
  ));

  let postCount = 0;
  ThoughtsJSON.forEach((thought) => {
    if (thought.date > timeThreshold) {
      postCount += 1;
    }
  });

  useEffect(() => {
    localStorage.setItem('mostRecentThought', ThoughtsJSON[0].date.toString());
    dispatchEvent(new Event('storage'));
  });

  return (
    <>
      <Title>My Thoughts</Title>
      <Break />
      {postCount ? posts : <Subtitle>Nothing right now, check back later!</Subtitle>}
    </>
  );
}

export default Thoughts;

export { shouldNotifyAboutNewThoughts };
