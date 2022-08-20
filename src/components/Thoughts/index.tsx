import { useEffect } from 'react';

import { Title, Break } from '../Common';
import Post from './Post';
import ThoughtsJSON from '../../data/thoughts.json';

function shouldNotifyAboutNewThoughts(): boolean {
  const mostRecentThoughtLS = localStorage.getItem('mostRecentThought');
  const mostRecentThoughtActual = ThoughtsJSON[0].date.toString();
  if (mostRecentThoughtLS !== mostRecentThoughtActual) {
    return true;
  }
  return false;
}

function Thoughts(): JSX.Element {
  const posts = ThoughtsJSON.map((thought) => (
    <div key={thought.date}>
      <Post
        title={thought.title}
        date={thought.date}
        icon={thought.icon}
        writing={thought.writing}
        match={null}
      />
    </div>
  ));

  useEffect(() => {
    localStorage.setItem('mostRecentThought', ThoughtsJSON[0].date.toString());
    dispatchEvent(new Event('storage'));
  });

  return (
    <>
      <Title>My Thoughts</Title>
      <Break />
      {posts}
    </>
  );
}

export default Thoughts;

export { shouldNotifyAboutNewThoughts };
