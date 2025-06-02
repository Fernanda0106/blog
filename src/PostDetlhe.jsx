import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchPostAndUser = async () => {
      const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(postRes.data);
      const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
      setAuthor(userRes.data);
    };

    fetchPostAndUser();
  }, [postId]);

  if (!post || !author) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <p><strong>Autor:</strong> {author.name}</p>
      <p><strong>Email:</strong> {author.email}</p>
      <Link to="/">← Voltar para a lista</Link>
    </div>
  );
};

export default PostDetail;
