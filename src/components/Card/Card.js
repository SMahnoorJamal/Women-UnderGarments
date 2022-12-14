import React from 'react';
import './Card.css';
import {
    Container,
    Card,
    Col, Button
} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
    console.log(newRating);
};
function CardItem() {

    return (
        <div
            style={{
                height: '50%',
                width: '47vw',
                backgroundColor: 'maroon',
                justifyContent: 'space-between',
                flexDirection: 'row',
                display: 'flex'
            }}>


            <div style={{
                width: '20.5vw', height: '80%', backgroundColor: 'greenyellow'
            }}>

                <div style={{ width: '20vw', height: '80%', }}>

                    <img src={require('../../images/bra1.jpg')}
                        style={{
                            border: `0.7px solid lightgray`,
                            height: '100%',
                            width: '20vw  ',
                            backgroundColor: 'gray'
                        }}
                        alt=" bra1" />
                </div>
                <div className='navbar1'>

                    <label>Molded Cup Underwire Lace Bra & Bikni Set</label>
                    <label style={{ marginTop: '1vh' }}>Rs 1,850</label>


                    <div>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={20}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>



            <div style={{
                width: '20.5vw', height: '80%', backgroundColor: 'greenyellow'
            }}>

                <div style={{ width: '20vw', height: '80%', }}>

                    <img src={require('../../images/bra1.jpg')}
                        style={{
                            border: `1px solid lightgray`,
                            height: '100%',
                            width: '20vw  ',
                            backgroundColor: 'gray'
                        }}
                        alt=" bra1" />
                </div>
                <div className='navbar1'>

                    <label>Molded Cup Underwire Lace Bra & Bikni Set</label>
                    <label style={{ marginTop: '1vh' }}>Rs 1,850</label>




                    {/* <div style={{width: '10vw', backgroundColor: 'orange'}}> */}
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={20}
                            activeColor="#ffd700"
                        />
                    {/* </div> */}
                </div>

            </div>



        </div>
    )

}

export default CardItem;