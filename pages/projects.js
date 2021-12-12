
import Head from 'next/head'
import Router from 'next/router'

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center py-7">
            <Head>
                <title>Simeng He Personal Site.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-5 text-center">
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
            </main>
        </div>
    )
}