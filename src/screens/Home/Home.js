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
            width: '93vw', display: 'flex', marginLeft: '3vw',
             height: '100vh', alignItems: 'center', backgroundColor: ' red'
        }}>
{/* <Card/> */}
            <Container style={{ display: 'flex', width: '100vw', justifyContent: 'space-between', height: '50vh', flexDirection: 'row', padding: 5, background: 'darkblue' }}>

                <div style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: 'pink', height: '60vh',
                    width: '45vw'
                }}>

                    <Card/>

{/* 
<Card/> */}
                    {/* {map1.map((item) => {

                        return (<div>
<Card/>

                        </div>
                    

//                             height: '45vh', backgroundColor: 'pink', width: '21vw' }}>
//                                 <Card style={{ width: '21vw', height: '45vh', backgroundColor: 'greenyellow' }}>
// {/* 

//                                     <Card.Img
//                                         className='bra1'
//                                         variant="top" src={require('../../images/bra1.jpg')} alt=" bra1" />
//                              */}
//                             {/* <div style={{backgroundColor:'orange'}}>
//                                         <Card.Title style={{
//                                             fontSize: '19px', fontWeight: 'lighter',
//                                             backgroundColor: 'green', width: '20vw'
//                                         }}
//                                             className='Title'>Molded Cup Underwire Lace Collection
//                                         </Card.Title>
//                                         <Card.Text>
//                                             Check out new hottest styles.
//                                         </Card.Text>
//                                     </div> */}
{/* //                                 </Card>


//                             </div>

                        )


                    })}
                    //  */}

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

            </Container>

        </div>
    )
}