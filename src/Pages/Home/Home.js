import React from 'react';
import Hero from '../../Components/Home/Hero/Hero';
import Quote from '../../Components/Home/Quote/Quote';
import Team from '../../Components/Reuse-components/Team/Team';
import Values from '../../Components/Home/Values/Values';
import Form from '../../Components/Reuse-components/Form/Form'
import Footer from '../../Components/Reuse-components/Footer/Footer';

export default function Home() {
    return (
        <div className="Home">
            <Hero/>
            <Values/>
            <Quote/>
            <Team/>
            <Form/>
            <Footer/>
        </div>
    )
}

