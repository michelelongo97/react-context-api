import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <div>
      <img src={`http://localhost:3000${post.image}`} alt={post.title} />
      <Link to={`/posts-list/${post.id}`}>
        <h2>{post.title}</h2> <h5>{post.tags}</h5> <p>{post.content}</p>
      </Link>
    </div>
  );
}
