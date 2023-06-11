import React, { useState } from 'react';

function addDaten() {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  return (
    <div>
      <h1>Pls add Daten Here</h1>
      <form>
        <label>Title:</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />
        <input type="text" value={newPostBody} onChange={(e) => setNewPostBody(e.target.value)} required />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

export default addDaten;
