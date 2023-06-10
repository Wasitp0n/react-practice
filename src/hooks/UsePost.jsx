import { useEffect, useState } from 'react';

const usePosts = () => {
  const [posts, setNewPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
        setNewPosts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    posts,
    setNewPosts,
    isLoading,
  };
};

export default usePosts;
