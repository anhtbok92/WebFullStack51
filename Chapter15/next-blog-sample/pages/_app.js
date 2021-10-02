import '../styles/globals.css'
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  console.log('myapp');
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
