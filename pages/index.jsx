import Head from 'next/head'
import LeftCol from './../components/LeftCol'
import MiddleCol from '../components/MiddleCol'
import RightCol from './../components/RightCol'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <title>Social Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="grid grid-cols-1 gap-3 overflow-hidden bg-white sm:grid-cols-11">
          <div className="sm:col-span-2">
            <LeftCol />
          </div>
          <div className="sm:col-span-6">
            <MiddleCol />
          </div>
          <div className="sm:col-span-3">
            <RightCol />
          </div>
        </div>
      </main>
    </div>
  )
}
