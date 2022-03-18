import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Studio.module.css'

//import React, { useState } from 'react'
import NavBar from '../component/navbar'
import { Row, Col, Container } from 'react-bootstrap'
import MainMenu from '../component/mainmenutabs'
import PageViewer from '../component/pageviewer'
import { InferGetStaticPropsType } from 'next'

const Studio: NextPage = () => {
  return (
    <div style={{backgroundColor: "ghostwhite"}}>
      <Head>
        <title>Website Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid style={{padding: 0}}>
        <Row>
          <Col md={3}>
            <div className={styles.toolbar} >
              <MainMenu/>
            </div>
          </Col>
          <Col style={{overflowY: "auto", height: "100%"}}>
            <NavBar/>
            <PageViewer/>
          </Col>
        </Row>
       </Container>

    </div>
  )
}

export default Studio
