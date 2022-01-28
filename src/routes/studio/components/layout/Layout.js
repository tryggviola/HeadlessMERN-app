import { Link } from "react-router-dom";

import "./Layout.css";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<div className="sidebar">
				<Link to="/">Home</Link>

				<div className="sidebar__links">
					<Link to="/studio">Studio</Link>
					<Link to="/studio/articles">Articles</Link>
					<Link to="/studio/projects">Projects</Link>
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
}
