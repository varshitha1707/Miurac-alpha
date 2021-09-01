import React from 'react'
// import Offerings from '../../Components/Home-msme/Offerings';
import Hero from '../../Components/Home/Hero/Hero';
// import TestimonialC from '../../Components/Home/Testimonials/TestimonialC';
// import Testimonials from '../../Components/Home/Testimonials/Testimonials';
// import Trial from '../../Components/Home/Trial/Trial';
import Values from '../../Components/Home/Values/Values';
import Quote from '../../Components/Home/Quote/Quote';
import Nav from '../../Components/Reuse-components/NavBar/Nav';
import Team from '../../Components/Home/Team/Team';

export default function Home() {
    return (
        <div className="Home">
            <Nav/>
            <Hero/>
            <br/>
            <Values/>
            <Quote/>
            {/* <Team/> */}
        </div>
    )
}
