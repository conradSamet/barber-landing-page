import '@/Styles/globals.scss'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montSerrat = Montserrat({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montSerrat.className}>
      <Component {...pageProps} />
    </div>
  )
}
