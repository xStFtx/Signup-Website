import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Signup() {
  return (
    <div className="container">
      <Head>
        <title>Signup | Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sign Up for my app!" />
        <p className="description">
          Sign up for my app by filling out the required information below.
        </p>
      </main>

      <Footer />
    </div>
  )
}
