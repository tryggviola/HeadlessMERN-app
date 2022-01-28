import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<Link to="/">Home</Link>
		</header>
	);
}

export default Header;
