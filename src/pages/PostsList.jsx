import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then(function (response) {
      setPosts(response.data);
    });
  };

  useEffect(fetchPosts, []);

  return (
    <>
      <h1>Lista dei post</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <Card post={post} />
        </div>
      ))}
    </>
  );
}
