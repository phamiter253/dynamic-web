import { Navbar, Dropdown, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => (
    <Navbar bg="light" variant="light" className="justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="light" style={{border: "none", boxShadow: "none", }}>
            <Image alt="hm" roundedCircle src="https://bulma.io/images/placeholders/32x32.png"/>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <div style={{textAlign: "center"}}>
              <Image alt="hm" roundedCircle src="https://bulma.io/images/placeholders/64x64.png" style={{margin:"2rem", marginBottom: "0.5rem"}}/>
              <p>Hello Priscilla</p>
            </div>
            <Dropdown.Item><FontAwesomeIcon icon={faInfoCircle} style={{width: "1rem", marginRight: "0.5rem"}}/>Help</Dropdown.Item>
            <Dropdown.Item><FontAwesomeIcon icon={faCog} style={{width: "1rem", marginRight: "0.5rem"}}/>Settings</Dropdown.Item>
            <Dropdown.Item><FontAwesomeIcon icon={faSignOutAlt} style={{width: "1rem", marginRight: "0.5rem"}}/>Signout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </Navbar>
)
export default NavBar