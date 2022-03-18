import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react'
import { Navbar, Button } from 'react-bootstrap'

import Login from '../component/login'
import GetStarted from '../component/getstarted'

const Home: NextPage = () => {
  const [loginModal, setLogin] = useState(false);
  const [startModal, setStart] = useState(false);
  const [style, setStyle] = useState(0);

  let styleList = [styles.orange, styles.pink, styles.blue, styles.purple, styles.green, styles.yellow, styles.red]

  useEffect(() => {
    const interval:NodeJS.Timeout = setInterval(() => {
      let newStyle = (style + 1) % 7
      setStyle(newStyle);
    }, 1000);
    return () => clearInterval(interval);
  }, [style]);

  return (
    <div style={{backgroundColor: "ghostwhite"}}>
      <Head>
        <title>Website Builder</title>
        <meta name="description" content="Dynamic Wbesite Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="light" variant="light" className="justify-content-end">
        <Button variant="outline-secondary" className={styles.button} onClick={() => setLogin(true)}>Login</Button>
        <Login show={loginModal} onHide={() => setLogin(false)}></Login>
        <Button variant="outline-secondary" className={styles.button} onClick={() => setStart(true)}>Get Started</Button>
        <GetStarted show={startModal} onHide={() => setStart(false)}></GetStarted>
      </Navbar>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dynamic <span className={styleList[style]}>Website</span> Builder
        </h1>
      </main>
    </div>
  )
}

export default Home
