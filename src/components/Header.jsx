import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Chi siamo</NavLink>
          </li>
          <li>
            <NavLink to="/posts-list">Lista dei post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
