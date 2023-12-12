import postService from "./post-service";
import { useFetch } from "./useFetch";

function App() {
	const {data,isLoading} = useFetch('https://jsonplaceholder.typicode.com/posts');

	if(	isLoading) return <div>Loading...</div>
	const {getPosts} = postService;
	console.log(getPosts());

	return (
		<ul>
			{data?.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
}

export default App;
