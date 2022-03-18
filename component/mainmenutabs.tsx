import { Tab, Nav, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import {getFragments} from '../component/apifunctions'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type Comp = {
    id: number;
    class_attr: string;
}

// interface Props {
//     list: any;
//   }

// export const getStaticProps: GetStaticProps<Props> = async () => {
//     const res = await fetch('http://localhost:5000/fragments')
//     //const posts: Comp[] = await res.json()
//     console.log(res)
//     return {
//       props: {
//         list: res,
//       },
//     }
//   }

//export default function MainMenu ({list}: InferGetStaticPropsType<typeof getStaticProps>) {
  export default function MainMenu () {
  
    return (
        <div style={{padding: "0.5rem"}}>
            <h1><FontAwesomeIcon icon={faArrowLeft} style={{width: "1rem", margin: "1rem"}}/>Project Name</h1>
            <br/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                
                <Nav fill variant="tabs" defaultActiveKey="temp">
                    <Nav.Item>
                    <Nav.Link eventKey="temp">Templates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="comp">Components</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Tab.Content>
                    <Tab.Pane eventKey="temp">
                    <ListGroup>
                    <ListGroup.Item ><FontAwesomeIcon icon={faPlus} style={{width: "1rem", marginRight: "0.5rem"}}/>Create New Webpage Template</ListGroup.Item>
                    {/* {list.map((item:Comp) => {<ListGroup.Item>{item.class_attr}</ListGroup.Item>})} */}
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="comp">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est dolores iusto esse expedita nam aspernatur voluptatibus soluta porro mollitia molestias labore accusamus error recusandae dicta animi id, voluptatum dolorem.
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}
