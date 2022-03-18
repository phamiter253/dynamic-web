import { Modal, Form, Row, Col, Button } from 'react-bootstrap'
import styles from '../styles/Login.module.css'

const GetStarted = ({...props}) => (
    <>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                <h1>Get Started Creating Websites</h1>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form style={{marginBottom: "1rem"}}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="5" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                        />
                    </Form.Group>
                </Row>
                <Form.Label>Email</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="email"
                className={styles.input}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                required
                type="password"
                placeholder="password"
                aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers, and
                    must not contain spaces, special characters, or emoji.
                </Form.Text> 
            </Form> 
            <Modal.Footer>
                <Button type="submit">Sign Up</Button> 
            </Modal.Footer>
        </Modal.Body>
        </Modal>
    </>
)
export default GetStarted