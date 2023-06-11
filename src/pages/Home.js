import React, { useState } from 'react';
import Post from '../component/Post';
import UsePosts from '../hooks/UsePost';

const Home = () => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const { posts, setNewPosts, isLoading } = UsePosts();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newPostTitle,
          body: newPostBody,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      setNewPosts([...posts, data]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    //setNewPostTitle('');

    // setNewPosts([
    //   ...posts,
    //   {
    //     id: Math.floor(Math.random() * 1000), // * database should auto generate id
    //     title: newPostTitle,
    //   },
    // ]);

    // setNewPostTitle('');
  };

  if (isLoading) return <h1>Loading.....</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />
        <input type="text" value={newPostBody} onChange={(e) => setNewPostBody(e.target.value)} required />

        <input type="submit" value="Post" />
      </form>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Home;
