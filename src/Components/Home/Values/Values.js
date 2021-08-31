import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react'
import value1 from '../../../Assets/img/Values/value1.png';
import value2 from '../../../Assets/img/Values/value2.png';
import value3 from '../../../Assets/img/Values/value3.png';
import value4 from '../../../Assets/img/Values/value4.png';
import './Values.css'

export default function Values() {

// the data is stored in an array
    const values= [
            {
                id: 1,
                row:1,
                img: value1,
            },
            {
                id: 2,
                row:1,
                title: 'We believe in passionate people',
                text: 'Innovation is brought by unreasonably passionate people and brutally honest minds. If you work on something you believe is very important, we’re there to help you.',
            },
            {
                id: 3,
                row:2,
                img: value2,
            },
            {
                id: 4,
                row:2,
                title: 'Closing the tech gap',
                text: 'Tech for many is still a costly affair and a hard access. Miurac hopes to bridge the tech gap by providing affordable tech to all MSME in India by 2030.',
            },
            {
                id: 5,
                row:3,
                img: value3,
            },
            {
                id: 6,
                row:3,
                title: 'Promote Equal competition ',
                text: 'A cricket team should not win because they have better kit. A business should not succeed because they have better tech. Miurac promotes an equal opportunity to technology for all businesses.',
            },
            {
                id: 7,
                row:4,
                img: value4,
            },
            {
                id: 8,
                row:4,
                title: 'Community of passionate founders',
                text: 'Join the community of founders who made their dream true. Get guidance and mentorship from successful people all over the world.',
            }

    ]
// function to reverse row every alternate row
    function mapp(row) {

        var dir = "row";
        if(row === 1 || row === 3 || row === 5 || row === 7) {
            dir = "row-reverse";
            return dir;
        }
        return dir;
}

    return (
        // main values container
        <div style={{backgroundColor:"#E5F5FE"}}>
            <Container className="Values">
                <Grid container spacing={5} justifyContent="center" direction="column">
                {/* mapping out the values */}
                {values.map(data=>(
                    <Grid container className="value" key={data.id} direction={mapp(data.id)} style={{margin:"20px"}} >
                        <Grid item xs={12} sm={10} md={8} lg={6}>
                            <div >
                                {/* text */}
                                <div style={{padding:"0px", width:"85%"}}>
                                    <h3 style={{fontFamily:'Lato',
                                        fontWeight: '800',
                                        fontSize: '45px',
                                        color: '#0A2540',}}>
                                            {data.title}
                                        </h3>
                                    <p style={{fontFamily:'Lato',
                                        fontSize: '18px',
                                        color: 'rgba(10, 37, 64, 0.9)',}}>
                                            {data.text}
                                        </p>
                                </div>
                                {/* image */}
                                <div>
                                    <img src={data.img} alt="" className="value-img" width="85%" />
                                </div>
                                    
                            </div> 
                        </Grid>  
                    </Grid> 
              ))} 
            </Grid>
            </Container>
        </div>
    )
}

