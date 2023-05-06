import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h1>Bookstore CMS</h1>
          </li>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <div>User logo placeholder</div>
      </nav>
    </header>
  );
}
