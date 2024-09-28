import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza</Link>
      <p>username</p>
    </header>
  );
}

export default Header;