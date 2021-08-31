import React from 'react'
import Offerings from '../../Components/Home-msme/Offerings';
import Hero from '../../Components/Home/Hero/Hero';
import TestimonialC from '../../Components/Home/Testimonials/TestimonialC';
import Testimonials from '../../Components/Home/Testimonials/Testimonials';
import Trial from '../../Components/Home/Trial/Trial';
import Values from '../../Components/Home/Values/Values';
import Nav from '../../Components/Reuse-components/NavBar/Nav';

export default function Home() {
    return (
        <div className="Home">
            <Nav/>
            <Hero/>
            <br/>
            <Values/>
            {/* <TestimonialC/> */}
        </div>
    )
}
