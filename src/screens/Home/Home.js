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
            position: 'absolute',
            width: '95%', 
            marginTop: '10vh',
            //  display: 'flex', 
            marginLeft: '3vw',
            height: '100vh',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            backgroundColor: 'red',



            // display: 'flex',
            // marginTop: 20,
            // height: '100vh',
            // backgroundColor:'green'
        }}>

{/* <Row> */}
<div style={{ marginTop: '17vh', flexDirection: 'row', display: 'flex' }}>
                <Card />

{/* <Col> */}
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
{/* </Col> */}
       
{/* <Col> */}
<img
                    className='bra2'
                    variant="top" src={require('../../images/bra2.PNG')} alt=" bra2" />
{/* </Col> */}
             

            </div>

{/* </Row> */}
<br/>
{/* <Row>

    <Col> */}
    <div style={{ marginTop: '6vh' }}>
                <text >
                    FEATURED PRODUCTS
                </text>

                <Card />

            </div>
    {/* </Col>


</Row> */}
           

          
        </div>
    )
}