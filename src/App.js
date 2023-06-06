import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Greeting from './component/Greeting';
import Post from './component/Post';

const posts = [
  { id: 1, title: 'Lass Uns React lernen!' },
  { id: 2, title: 'Wie konnen Wir Node.js installrieren?' },
  { id: 3, title: 'Einführung die HTML' },
];

function App() {
  console.log('Hello World');
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Tim" />

      <div>
        {posts.map(({ id, title }) => {
          return <Post key={id} title={title} id={id} />;
        })}
      </div>
    </div>
  );
}

export default App;
