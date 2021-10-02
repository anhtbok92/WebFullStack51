import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello MindX Web Fullstack 51</h1>
      <h2>
          <Link href="/posts/first-post">
              <a>Go to first post</a>
          </Link>
        </h2>
    </div>
  )
}
