import React, { useEffect, useState } from 'react';
import './App.css';
import AllPosts from './components/admin/AllPosts';
import LoadingComponent from './components/posts/Loading';
import axiosInstance from './axios';

function Admin() {
	const PostLoading = LoadingComponent(AllPosts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default Admin;