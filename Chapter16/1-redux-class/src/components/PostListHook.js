import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";

const PostListHook = () => {
    // 1. Lấy dữ liệu từ global state bằng cách sử dụng useSelector (tương ứng với mapStateToProps)
    const posts = useSelector((state) => {
        console.log('globalState', state);
        return state.posts
    })

    // 2. Lấy hành động từ actions bằng useDispatch (tương ứng với mapDispatchToProps)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    const renderPost = () => {
        return posts.map((post) => {
            return (
                <div className='postCard' key={post.id}>
                    <h2>Title: {post.title}</h2>
                    <h2>Body: {post.body}</h2>
                </div>
            )
        })
    }

    return (
        <div>{renderPost()}</div>
    )

}

export default PostListHook;