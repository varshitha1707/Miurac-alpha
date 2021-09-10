import React from 'react'
import HeroA from '../../Components/About/Hero/HeroA'
import QuoteA from '../../Components/About/Quote/QuoteA'
import WhatUs from '../../Components/About/WhatUs/WhatUs'
import Footer from '../../Components/Reuse-components/Footer/Footer'
import NavBar from '../../Components/Reuse-components/NavBar/Nav'
import Team from '../../Components/Reuse-components/Team/Team'

function About() {
    return (
        <div>
            <NavBar/>
            <HeroA/>
            <WhatUs/>
            <Team/>
            <QuoteA/>
            <Footer/>
        </div>
    )
}

export default About
