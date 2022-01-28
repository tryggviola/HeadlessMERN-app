import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import "./Home.css";

function Home() {
	return (
		<div>
			<Header />
			<div className="links">
				<Link to="/login">Login</Link>
				<Link to="/studio">Studio</Link>
			</div>
		</div>
	);
}

export default Home;
