import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [postsRes, usersRes] = await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/users')
      ]);
      setPosts(postsRes.data);
      setUsers(usersRes.data);
    };

    fetchData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <strong>{post.title}</strong> – por {getAuthorName(post.userId)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;