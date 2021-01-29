
import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/posts/Posts';
import LoadingComponent from './components/posts/Loading';
import axiosInstance from './axios';

function App() {
	const Loading = LoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			console.log(res.data);
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<Loading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;