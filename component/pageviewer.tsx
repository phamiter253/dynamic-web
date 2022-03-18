import Iframe from 'react-iframe'

const PageViewer = () => (
    <div style={{backgroundColor: "blue", width: "130vh", height: "95vh"}}>
        <Iframe url="http://localhost:5000/back-to-school"
        width="100%"
        height="100%"
        />
    </div>
)
export default PageViewer