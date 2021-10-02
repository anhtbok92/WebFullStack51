import { Fragment } from "react";
import Head from 'next/head'
import { getPostData, getSlugs } from "../api/data";

function PostDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            <h2>{props.post.content}</h2>
        </Fragment>
    )
}

export function getStaticProps(context) {
    console.log('abc-content:', context);
    const postData = getPostData(context.params.slug)[0];
    return {
        props: {
            post: postData
        }
    }
}

export function getStaticPaths() {
    const slugs = getSlugs();
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug }})),
        fallback: false,
    }
}
export default PostDetailPage;