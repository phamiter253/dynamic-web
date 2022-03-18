import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Project.module.css'

import NavBar from '../component/navbar'
import { Row, Col, Container, Button, Image, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Projects: NextPage = () => {
  return (
    <div style={{backgroundColor: "ghostwhite"}}>
      <Head>
        <title>Your Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid style={{padding: 0}}>
        <Row>
          <Col md={3}>
            <div className={styles.profileinfo}>
              <Image alt="hm" roundedCircle src="https://bulma.io/images/placeholders/256x256.png"/>
              <br/>
              <h3 style={{marginTop: "2rem", color: "black", fontFamily: "serif"}}>Priscilla Hamiter</h3>
              <h5 style={{color: "black", fontFamily: "serif"}}>12 Working Projects</h5>
              <br/>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ backgroundColor: "#f4f3f0"}}><FontAwesomeIcon icon={faPlus} style={{width: "1rem", marginRight: "0.5rem"}}/>New Project</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <NavBar/>
          <Container fluid>
            <br/>
            <Row>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" style={{border: "none", boxShadow: "none"}}>
                  <Image alt="hm" fluid src="https://bulma.io/images/placeholders/640x480.png" />
                </Button>
              </Col>
            </Row>
          </Container>
          </Col>
          
        </Row>
      </Container>
      
    </div>
  )
}

export default Projects