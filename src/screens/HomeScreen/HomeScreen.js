
import './homeScreen.css'
import { Container, Card, Col, Button } from 'react-bootstrap';

export default function HomeScreen() {
    return (

        <div style={{
            width: '93vw', marginLeft: '3vw', flexDirection: 'row', height: '100vh', alignItems: 'center', justifyContent: 'center',
        }}>

            <Container
                style={{
                    width: '92.25vw', height: '60vh', marginTop: '12vh', padding: 5, backgroundColor: 'red'
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '89vw', backgroundColor: 'pink' }}>
                    <div style={
                        { border: ' 0.4px solid', borderColor: 'lightGray' }
                    }>
                        <Card style={{ width: '19vw', height: '45vh', backgroundColor: 'greenyellow' }}>

                            <Card.Img
                                className='bra1'
                                variant="top" src={require('../../images/bra1.jpg')} alt=" bra1" />
                        </Card>

                        <Card.Title className='Title'>2022 TRA
                            COLLECTION</Card.Title>
                        <Card.Text>
                            Check out new hottest styles.
                        </Card.Text>

                        <Card style={{ width: '19vw', height: '45vh', backgroundColor: 'greenyellow' }}>
                            <Card.Img
                                className='bra1'
                                variant="top" src={require('../../images/bra1.jpg')} alt=" bra1" />
                        </Card>

                    </div>
                    <div style={
                        { border: ' 0.4px solid', borderColor: 'lightGray' }}>
                        <Card style={{ width: '19vw', height: '43vh' }}>
                            {/* <Card.Img variant="top" src={logo} alt="logo" /> */}
                            {/* */}
                        </Card>

                    </div>

                    <Card.Body style={{
                        width: '20%',
                        // ,marginLeft: 5
                    }}>
                        <Card.Title className='Title'>2022 TRA
                            COLLECTION</Card.Title>
                        <Card.Text>
                            Check out new hottest styles.
                        </Card.Text>
                        <Button variant="primary">Shop Now</Button>
                    </Card.Body>

                    <Card.Img
                        className='HomeImg'
                        variant="top" src={require('../../images/HomeImg.jpg')} alt=" HomeImg" />

                </div>

            </Container>


            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>

    );
}