import { ReactNode } from 'react'
import Head from 'next/head'
import Nav from './Nav'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Task Wizard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-200 text-center py-4">
        Task Wizard &copy; 2023
      </footer>
    </div>
  )
}

export default Layout
