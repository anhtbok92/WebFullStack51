import PostItem from "./post-item";
function FeaturePosts(props) {
    return (
        <section>
            <h2>Feature Posts</h2>
            <ul>
                {props.posts.map((post, index) => {
                    return <PostItem key={index} post={post} />
                })}
            </ul>
        </section>
    )
}

export default FeaturePosts;