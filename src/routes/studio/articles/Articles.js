import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";

import "./Articles.scss";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const getArticles = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_API_SERVER}/articles`
			);
			const data = await response.json();

			setArticles(data);
		};

		getArticles();
	}, []);

	const updateArticle = async (published, article) => {
		const updatedArticle = {
			...article,
			published,
		};
		const updatedArticles = articles.map((a) =>
			a._id === article._id ? updatedArticle : a
		);

		setArticles(updatedArticles);

		await fetch(`${process.env.REACT_APP_API_SERVER}/articles/${article._id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json; charset=UTF-8", // Indicates the content
			},
			body: JSON.stringify(updatedArticle),
		});
	};

	return (
		<div className="article-list">
			{articles?.map((article) => (
				<div className="article" key={article._id}>
					<div>
						<Link to={`/studio/articles/${article?._id}`}>
							{article?.title}
						</Link>
						<h3>{article?.subtitle}</h3>
					</div>
					<Switch
						onChange={(value) => updateArticle(value, article)}
						checked={!!article.published}
					/>
				</div>
			))}
		</div>
	);
}
