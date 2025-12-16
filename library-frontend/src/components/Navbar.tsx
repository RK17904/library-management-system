import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        {/* The Gradient Icon */}
        <div className="brand-logo">LB</div>
        <div className="brand-text">
          <h1>Library Manager</h1>
          <small>React + Vite frontend • Friendly UI</small>
        </div>
      </div>
      
      <div className="nav-links">
        <Link to="/">Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;