import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        const { posts } = this.props;
        return posts.map((post) => {
            return (
                <div className='postCard' key={post.id}>
                    <h2>Title: {post.title}</h2>
                    <h2>Body: {post.body}</h2>
                </div>
            )
        })
    }

    render() {
        return (
            <div>{this.renderPost()}</div>
        );
    }
}

// 2. Dữ liệu từ global state được sử dụng trong view như thế nào ?
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// 1. Action được call ở view như thế nào ?
export default connect(mapStateToProps, { fetchPosts })(PostList);

// Luồng chạy của app
// 1. Chạy vào index.js -> trong index.js khởi tạo store
// 2. index.js -> App.js -> PostList.js
// 3. Trong PostList.js -> render lần 1 -> không có gì
// 4. Trong PostList.js -> componentDidMount -> render lần 2 -> filter dữ liệu lấy được vào view
// Trong bước số 4 : Có 2 bước
//    4.1. Lấy hành động từ actions
//    4.2. Tùy vào hành động, lấy dữ liệu tương ứng trong global state (reducers)