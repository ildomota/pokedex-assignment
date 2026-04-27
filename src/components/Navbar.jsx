import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Pokédex</h3>
      <Link to="/">Pokedex</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;