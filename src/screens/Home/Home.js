import './Home.css'
import {
    Container,
    // Card,
    Row,
    Col, Button
} from 'react-bootstrap';
import Card from '../../components/Card/Card';

export default function HomeScreen() {

    const array = ['title1', 'title2']
    const map1 = array;
    return (
  
        <div style={{
            marginTop: 20,
            width: '95%',
            marginLeft: '2.5vw',
            height: '100%',
            backgroundColor: 'green'
          }}>
      
            {/* <Row> */}
            <div style={{ marginTop: '17vh', flexDirection: 'row', display: 'flex' }}>
              <Card />
      
              {/* <Col> */}
              <div style={{ backgroundColor: 'PINK', width: '16vw', marginTop: '14vh', marginLeft: '5vw' }} >
      
                <label className='Title'>2022 BRA
                  COLLECTION</label>
      
                <div style={{ marginTop: '1vw' }}>
                  <text>
                    Check out new hottest styles.
                  </text>
                </div>
                <button style={{ height: '6vh', width: '7vw', marginTop: '4vh' }}>SHOP NOW</button>
              </div>
      
              <div style={{ marginLeft: '5vw' }}>
                <img
                  className='bra2'
                  variant="top" src={require('../../images/bra2.PNG')} alt=" bra2" />
              </div>
      
            </div>
      
            <br />
      
            <div style={{ marginTop: '6vh' }}>
              <text >
                FEATURED PRODUCTS
              </text>
      
              <Card />
      
            </div>
          </div>
    )
}