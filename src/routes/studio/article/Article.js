import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Switch from "react-switch";

import "./Article.scss";

export default function Article() {
	const params = useParams();

	const [article, setArticle] = useState([]);
	useEffect(() => {
		const getArticle = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_API_SERVER}/articles/${params.id}`
			);
			const data = await response.json();

			setArticle(data);
		};

		getArticle();
	}, []);

	useEffect(() => {
		saveArticle();
	}, [article.published]);

	const saveArticle = async () => {
		await fetch(`${process.env.REACT_APP_API_SERVER}/articles/${params.id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json; charset=UTF-8", // Indicates the content
			},
			body: JSON.stringify(article),
		});
	};

	const updateArticle = (key, value) => {
		setArticle({
			...article,
			[key]: value,
		});
	};

	return (
		<div className="article-box">
			<Link to="/studio/articles">Back</Link>
			<div className="title">
				<input
					value={article.title || ""}
					onChange={(e) => updateArticle("title", e.target.value)}
				/>
				<Switch
					onChange={(e) => updateArticle("published", e)}
					checked={!!article.published}
				/>
			</div>
			<div className="subtitle">
				<input
					value={article.subtitle || ""}
					onChange={(e) => updateArticle("subtitle", e.target.value)}
				/>
			</div>
			<div>{article.created}</div>
			<textarea
				className="edittext"
				value={article.content}
				onChange={(e) => updateArticle("content", e.target.value)}
			/>
			<button onClick={saveArticle}>Save</button>
		</div>
	);
}
