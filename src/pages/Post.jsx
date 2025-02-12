import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  return (
    <>
      <img src={`http://localhost:3000${post.image}`} alt={post.title} />
      <h3>{post.title}</h3>
      <h5>{post.tags}</h5> <p>{post.content}</p>
    </>
  );
}
