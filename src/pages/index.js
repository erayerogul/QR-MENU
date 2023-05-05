import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title href='/'>RAAT QR MENU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.main}>
        <div>
          <img src="https://cdn.raatbodrum.com/logo/logo.png" width="160" height="160" draggable="false" class="sc-gsTEea jQLxmr" />
        </div>
      </header>
     
      <main className={styles.main}>
        <div>
          <a href='/beer'>
          <img src="https://cdn.raatbodrum.com/buttons/beer.png" width="100" draggable="false" class="sc-gsTEea jQLxmr" />
          </a>
          <a href='/whiskey'>
          <img src="https://cdn.raatbodrum.com/buttons/whiskey.png" width="100" draggable="false" class="sc-gsTEea jQLxmr" />
          </a>
          <a href='/wine'>
          <img src="https://cdn.raatbodrum.com/buttons/wine.png" width="100" draggable="false" class="sc-gsTEea jQLxmr" />
          </a>
          <a href='/cocktails'>
          <img src="https://cdn.raatbodrum.com/buttons/cocktails.png" width="100" draggable="false" class="sc-gsTEea jQLxmr" />
          </a>
          <a href='/coffee'>
          <img src="https://cdn.raatbodrum.com/buttons/coffee.png" width="100" draggable="false" class="sc-gsTEea jQLxmr" />
          </a>
          <a href='/tea'>
          <img src="https://cdn.raatbodrum.com/buttons/tea.png" width="100" draggable="false" class="sc-gsTEea jQLxmr" />
          </a>
        </div>
      </main>
    </div>
  )
}
