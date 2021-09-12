import React from 'react'
import WhyUs from '../../Components/Home-msme/WhyUs/WhyUs'
import HeroM from '../../Components/Home-msme/HeroM/HeroM'
import Offerings from '../../Components/Home-msme/Offerings/Offerings'
import Form from '../../Components/Reuse-components/Form/Form'
import Footer from '../../Components/Reuse-components/Footer/Footer'
import Testimonial from '../../Components/Home-msme/Testimonial/Testimonial'
export default function HomeM() {
    return (
        <div>
            <HeroM/>
            <Offerings/>
            <WhyUs/>
            <Testimonial/>
            <Form/>
            <Footer/>
        </div>
    )
}

