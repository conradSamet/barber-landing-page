import { Navbar } from '@/Components/NavBar/Navbar'
import Head from 'next/head'
import styles from '@/Styles/Main/main.module.scss'
import { Home } from '@/Components/Home/Home'
import { Services } from '@/Components/Services/Services'
import { About } from '@/Components/About/About'
import { WorkingTime } from '@/Components/WorkingTIme/WorkingTime'
import { Footer } from '@/Components/Footer/footer'

export async function getStaticProps() {
  console.log(`revalidated ${new Date().getDay()}`)
  return {
    props: {
      day: new Date().getDay(),
    },
    revalidate: 60,
  }
}

type date = {
  day: number
}

export default function Main({ day }: date) {
  return (
    <>
      <Head>
        <title>BarberShop Project</title>
        <meta
          name='description'
          content='Barber shop Landing Page created by @Samet Conrad'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <Navbar />
          <Home />
          <Services />
          <About />
          <WorkingTime day={day} />
          <Footer />
        </div>
      </main>
    </>
  )
}
