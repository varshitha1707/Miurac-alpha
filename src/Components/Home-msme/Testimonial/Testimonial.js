import {React, useState} from 'react'
import {Container, Grid, Icon} from '@material-ui/core'
import photo from '../../../Assets/img/Testimonials/Photo.svg'
import iconLeft from '../../../Assets/img/Testimonials/iconLeft.svg'
import iconRight from '../../../Assets/img/Testimonials/iconRight.svg'
import './Testimonial.css';
import { motion } from "framer-motion"
// import {wrap} from '@popmotion/popcorn'


function Testimonial() {

    const feedback =[
        {
            id: 1,
            author: 'Ram ',
            designation: 'Founder Wipro',
            text:'Miurac provides one of best technology service at reasonable prices',
            img: photo,
        },
        // {
        //     id: 2,
        //     author: 'John Doe',
        //     designation: 'Founder Wipro',
        //     text:'something something something something something something something something',
        //     img: photo,
        // },
        // {
        //     id: 3,
        //     author: 'John Doe',
        //     designation: 'Founder Wipro',
        //     text:'something something something something something something something something',
        //     img: photo,
        // },
    ]

    const [[page, direction], setPage] = useState([0, 0])
    // const feedbackIndex = wrap(0, feedback.length, page)

    


    return (
        <div className="Testimonials">
            <div className="Testimonials-title">
                <h1>Testimonials</h1>
            </div>
                {feedback.map(feedback => (
            <motion.div 
                // variants={variants}
                initial = 'hidden'
                animate = 'visible' >
                <Grid container spacing={3} className="Testimonials-grid-container" key={feedback.id}>
                <Grid item xs={12} sm={8} md={6} lg={6} className="Testimonials-image">
                    <div>
                        <img src={feedback.img} alt="" className="Testimonials-img"></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={6} className="Testimonials-feedback">
                    <div className="Feedback-title">

                        <h3>
                        Client Feedback</h3>

                    </div>
                    <div className="Feedback-text">
                        <p>{feedback.text}</p>
                    </div>
                    <div className="Feedback-author">
                        <p>{feedback.author}</p>
                        <p>{feedback.designation}</p>
                    </div>
                    <div className="Testimonials-arrows">
                        <Icon>
                            <img src={iconLeft} alt="" className="iconLeft"></img>         
                        </Icon>
                        <Icon>
                            <img src={iconRight} alt="" className="iconRight"></img>
                        </Icon>
                    </div>
                </Grid>
                </Grid>
            </motion.div >
                ))}
        </div>
    )
}

export default Testimonial
