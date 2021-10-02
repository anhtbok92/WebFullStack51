import Head from 'next/head'
import { Fragment } from "react";
import { data } from './api/data';
import FeaturePosts from "../components/home-page/feature-posts";

function Home(props) {
    console.log('indexPage-Props: ', props);
    return (
        <Fragment>
            <Head>
                <title>Mindx 51 blog</title>
            </Head>
            <h1>Mindx blog content children</h1>
            <FeaturePosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    /*
    TODO - call data from API using axios or fetch
     */
    const blogData = data;
    console.log('callAPI', blogData);
    return {
        props: {
            posts: blogData,
        }
    }
}
export default Home;
