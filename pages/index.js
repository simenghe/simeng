import Head from 'next/head'
import NavBar from '../components/NavCard.js'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Simeng He Personal Site.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hi, I am Simeng!{' '}
        </h1>
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-red-600" href="https://nextjs.org">
            my website.
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          University of Waterloo{' '}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            Computer Science
          </code>
          {' '}senior
        </p>

        <div className="items-center mt-6 flex">
          <a target="_blank" href="https://github.com/simenghe">
            <img src="/github.svg" alt="Github" className="h-10 px-2" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/simeng-he/">
            <img src="/linkedin2.svg" alt="Linkedin" className="h-10 px-2" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/simeng-he/">
            <img src="/linkedin2.svg" alt="Linkedin" className="h-10 px-2" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {/* <NavBar title="Github" description="Find some of my projects" link="https://github.com/simenghe" /> */}
          <NavBar title="Projects" description="Check out my tech projects!" link="/projects" />



          <NavBar title={"Hobbies"} link="#hobbies" description={"Juggling and other stuff!"} />


        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <code className="px-2">React + TailwindCSS + Next.js</code>
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
        </a>
      </footer>
    </div>
  )
}
