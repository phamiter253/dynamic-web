import { Modal, Form, Button } from 'react-bootstrap'
import styles from '../styles/Login.module.css'

const Login = ({...props}) => (
    <>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                <h1>Login</h1>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>Email</Form.Label>
                <Form.Control
                required
                type="text"
                className={styles.input}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                required
                type="password"
                className={styles.input}
                />
            </Form>  
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit">Login</Button>
        </Modal.Footer>
        </Modal>
    </>
)
export default Login