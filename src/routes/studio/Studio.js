import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Overview from "./overview/Overview";
import Articles from "./articles/Articles";
import Projects from "./projects/Projects";
import Layout from "./components/layout/Layout";

const Studio = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Overview />} />
				<Route path="articles" element={<Articles />} />
				<Route path="projects" element={<Projects />} />
			</Routes>
		</Layout>
	);
};

export default Studio;
