import './Home.css'
import { Container, 
    // Card
     Col, Button } from 'react-bootstrap';
import Card from '../../components/Card/Card';

export default function HomeScreen() {

    const array = ['title1', 'title2']
    const map1 = array;
    return (
        <div style={{
            width: '95%', display: 'flex', marginLeft: '3vw',
             height: '100%', alignItems: 'center',
             backgroundColor: 'red'
        }}>


<div style={{marginTop: '17vh'}}>
<Card/>     

                 
<Card/>
</div>
                    

           
                {/* <div >

                    <Card.Title className='Title'>2022 TRA
                        COLLECTION</Card.Title>
                    <Card.Text>
                        Check out new hottest styles.
                    </Card.Text>
                </div>

                <Card.Img
                    className='bra2'
                    variant="top" src={require('../../images/bra2.PNG')} alt=" bra2" /> */}

        </div>
    )
}