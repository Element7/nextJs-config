import Head from 'next/head'
import Link from 'next/link';
import HelloWorld from '../src/HelloWorld';
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Welcome to Next.js!</h2>
      <HelloWorld />
      <Link href="/about">
        <a data-cy="nav-item">About</a>
      </Link>
      <button
        onClick={() => console.log()}
        data-cy="mmenu-btn"
      >
        MMenu
      </button>
      <main>
        <h1>Testing Next.js With Jest and React Testing Library</h1>
      </main>
    </div>
  )
}
