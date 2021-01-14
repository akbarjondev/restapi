import { useEffect, useState } from 'react'

function Photos() {

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {

		try {

			(async function () {
				
				const response = await fetch('https://jsonplaceholder.typicode.com/posts');
				const json = await response.json();

				setLoading(false);
				setData(json);

			})();

		} catch(e) {
			console.error(e)
		}

	}, []);

	return (
		<>
			{ loading && <h1>loading...</h1> }
			
			<ul>
				{
					data.map(post => (
							<li key={post.id}>
								<div>{post.id}) {post.title}</div>
								<code>{post.body}</code>
							</li>
						)
					)
				}
				
			</ul>
		</>
	);
}

export default Photos
