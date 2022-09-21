import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Card/Card';

function AutoLayoutExample() {
    return (
        <Container>
                <div style={{
            width: '93vw',
            marginLeft: '3vw',
             backgroundColor: 'red'
        }}>
            <Row>
                <div style={{ marginTop: '17vh', flexDirection: 'row', display: 'flex' }}>
                    <Card />

                    <div style={{ backgroundColor: 'PINK', width: '16vw' }} >

                        <label className='Title'>2022 BRA
                            COLLECTION</label>
                        <div style={{ marginTop: '1vw' }}>
                            <text>
                                Check out new hottest styles.
                            </text>
                        </div>
                        <button style={{ height: '6vh', width: '7vw', marginTop: '4vh' }}>SHOP NOW</button>
                    </div>

                    <img
                        className='bra2'
                        variant="top" src={require('../../images/bra2.PNG')} alt=" bra2" />

                </div>
            </Row>
            <Row>
                {/* <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col> */}
                <Col>
                    <div style={{ marginTop: '6vh' }}>
                        <text >
                            FEATURED PRODUCTS
                        </text>

                        <Card />

                    </div>
                </Col>

            </Row>
            </div>
        </Container>
    );
}

export default AutoLayoutExample;