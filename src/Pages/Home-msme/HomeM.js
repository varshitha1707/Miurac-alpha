import React from 'react'
import WhyUs from '../../Components/Home-msme/WhyUs/WhyUs'
import HeroM from '../../Components/Home-msme/HeroM/HeroM'
import Nav from '../../Components/Reuse-components/NavBar/Nav'
import Offerings from '../../Components/Home-msme/Offerings/Offerings'
import Form from '../../Components/Reuse-components/Form/Form'
import Footer from '../../Components/Reuse-components/Footer/Footer'
export default function HomeM() {
    return (
        <div>
            <Nav/>
            <HeroM/>
            <Offerings/>
            <WhyUs/>
            {/* testimonials component */}
            <Form/>
            <Footer/>
        </div>
    )
}

