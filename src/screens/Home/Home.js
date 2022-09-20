import './Home.css'
import {
    Container,
    // Card
    Col, Button
} from 'react-bootstrap';
import Card from '../../components/Card/Card';

export default function HomeScreen() {

    const array = ['title1', 'title2']
    const map1 = array;
    return (
        <div style={{
            width: '95%', display: 'flex', marginLeft: '3vw',
            height: '100%', alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'red'
        }}>


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


            <div style={{ marginTop: '6vh' }}>
                <text >
                    FEATURED PRODUCTS
                </text>

                {/* <Card /> */}

            </div>

        </div>
    )
}