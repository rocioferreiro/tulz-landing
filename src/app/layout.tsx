import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'

const inter = Inter({
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: "Home - Tulz",
  description: 'La revolución educativa esta en camino!',
  image: 'https://i.ibb.co/mztjPtT/logo.png',
  openGraph: {
    images: 'https://i.ibb.co/mztjPtT/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={ `bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <main className='main'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
