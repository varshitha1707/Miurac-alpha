import { Container,Grid, Paper } from '@material-ui/core'
import React from 'react'
import photo from '../../../Assets/img/Testimonials/photo.png'
import quote1 from '../../../Assets/img/Testimonials/quote1.svg'
import quote2 from '../../../Assets/img/Testimonials/quote2.svg'
import quote3 from '../../../Assets/img/Testimonials/quote3.svg'
import line from '../../../Assets/img/Testimonials/lineabovename.svg'
import ratings from '../../../Assets/img/Testimonials/ratings.svg'
import rectangle from '../../../Assets/img/Testimonials/rectangle.svg'
import Carousel from 'react-elastic-carousel';

function TestimonialC() {
    // testimonial data
    const testimonial = [
    {
        id:1,
        name:'name surname',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sit eu, sed egestas purus tortor. Arcu sed ipsum ultricies massa eget elit ante adipiscing nisi. Amet nunc semper suspendisse donec.', 
        bg: 'rgba(85, 147, 252, 0.2)',
        img:photo,
        quote:quote1,
    },
    {
        id:2,
        name: 'name surname',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sit eu, sed egestas purus tortor. Arcu sed ipsum ultricies massa eget elit ante adipiscing nisi. Amet nunc semper suspendisse donec. ',
        bg: 'rgba(47, 186, 158, 0.2)',
        img: photo,
        quote:quote2,
    },
    {
        id:3,
        name: 'name surname',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sit eu, sed egestas purus tortor. Arcu sed ipsum ultricies massa eget elit ante adipiscing nisi. Amet nunc semper suspendisse donec. ',
        bg: 'rgba(249, 176, 106, 0.2)',
        img: photo,
        quote:quote3,
    },
    // I've put 4 just to show how it works
    {
        id:3,
        name: 'name surname',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sit eu, sed egestas purus tortor. Arcu sed ipsum ultricies massa eget elit ante adipiscing nisi. Amet nunc semper suspendisse donec. ',
        bg: 'rgba(249, 176, 106, 0.2)',
        img: photo,
        quote:quote3,
    },
]


    const breakpoints =[
        
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1400, itemsToShow: 3 },
    ]
    return (
            <div className="Testimonials" style={{
                marginTop:"100px",
            }}>
                <img src={rectangle} alt=""/>
                <div className="Testimonials-text" style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '46px',
                    color: '#4D2DB0',
                }}>
                    {/* title */}
                    <p>What Our Clients say about us...</p>
                </div>
                {/* carousel begins */}
                <Carousel 
                breakPoints={breakpoints} 
                enableAutoPlay={true}
                showArrows={false}
                style={{
                    width:"95%",
                    margin:"auto",
                }}
                >
                        {/* mapping out the testimonial content onto separate grid items */}
                        {testimonial.map(testimonial => (
                            <Container   >
                            {/* this below grid will contai the testimonial items */}
                                <Grid container 
                                spacing={8} 
                                justifyContent="center"
                                alignItems="center"
                                >
                                    {/* grid items */}
                                    <Grid item xs={12} sm={12} md={12} lg={12} key={testimonial.id}
                                    style={{
                                        marginTop:"90px",
                                    }}
                                    >
                                        <Paper style={{
                                            backgroundColor:testimonial.bg,
                                            height:"550px",
                                        }}>
                                            {/* testimonial profile img */}
                                            <img src={testimonial.img} alt="testimonial"
                                            style={{
                                                width:"20%",
                                                margin:" -30px calc(50% - 45px)",
                                            }}/>
                                            {/* testimonial quote img */}
                                            <img src={testimonial.quote} alt="quote"
                                            style={{
                                                width:"10%",
                                                margin:" 50px calc(50% - 25px)",
                                            }}/>
                                            {/* testmonial given text */}
                                            <p style={{
                                                fontFamily: 'Nunito Sans',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontSize:"20px",
                                                margin:"30px",
                                                textAlign:"center",
                                            }}>
                                                {testimonial.text}
                                            </p>
                                            <img src={line} alt="line"
                                            style={{
                                                display:"block",
                                                width:"90%",
                                                margin:"60px auto 10px auto",
                                                alignSelf:"center",
                                                justifyContent:"center",
                
                                            }}/>    
                
                                            {/* testimonial name */}
                                            <h3 style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '24px',
                                                textAlign:"center",
                                            }}>
                                                {testimonial.name}
                                            </h3>
                                            {/* testimonial ratings img*/}
                                            <img src= {ratings} alt="rayings"
                                            style={{
                                                display:"block",
                                                width:"50%",
                                                margin:" -15px auto 0px auto",
                                            }}/>
                
                                        </Paper>
                                    </Grid>
                            </Grid>
                        </Container>
                    ))}
                </Carousel>
            </div>
    )
}

export default TestimonialC
