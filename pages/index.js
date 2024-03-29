import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/map'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.background}>
      <Head>
        <title>Skytrain Expo Line</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src='../../logo.png'/>
        
      <main className={styles.main}>
        <h1 className={styles.header}> SkyTrain Schedules</h1>
        

        <Map></Map>
        <p className={styles.text}>Expo Line connects Downtown Vancouver with the cities of Burnaby, New Westminster, and Surrey.</p>
      <div className={styles.text}>
      The Expo Line operates two routes:
Waterfront Station (Downtown Vancouver) to King George Station (Surrey)
Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)

      </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.text}> Subscribe to the TransLink Monthly Updates newsletter to receive the latest news, projects, transit service changes and other initiatives. You may unsubscribe at any time.</div>
      <input className={styles.input} type="text" value="First Name"/> 
      <input className={styles.input} value="Email Address"/>
      <button className={styles.button}>Subscribe</button>
      </div>
      
      </div>
    </>
  )
}
