import React from 'react'
import AlternatingGrid from '../../Reuse-components/AlternatingGrid/AlternatingGrid'
import one from '../../../Assets/img/WhyUs/one.svg'
import two from '../../../Assets/img/WhyUs/two.svg'
import three from '../../../Assets/img/WhyUs/three.svg'
import four from '../../../Assets/img/WhyUs/four.svg'
import './WhyUs.css';

// just alight the circles later
function WhyUs() {
    return (
        <div className="WhyUs-UpContainer">
            <div className="WhyUs-main-title">
                <h1>Why work with <span style={{color:'#00A9F5'}}>Us?</span></h1>
            </div>
            {/* Using alternating grid from reusable components */}
            <AlternatingGrid name={'WhyUs'} values={data} ></AlternatingGrid>
        </div>
    )
}

export default WhyUs
// Why us page data 
const data= [
    {
        id: 1,
        row:1,
        img: one,
        title: 'Custom Strategy',
        text: 'Every business needs a custom strategy. We undertake an immense amount of research to understand your business and competition before devising you a unique custom solution.',
    
    },
    {
        id: 2,
        row:2,
        img: two,
        title: 'Agile Mindset',
        text: 'We work with you in a flexible way allowing you to change courses when required to ensure the end result is scalable and solves an issue in the market.',
    
    },
    {
        id: 3,
        row:3,
        img: three,
        title: 'Long Term Solutions',
        text: 'In our view things should be built with a long term mindset. We always aim to build solutions which will provide long term benefits rather than quick fixes.',
    
    },
    {
        id: 4,
        row:4,
        img: four,
        title: 'Relationship Driven',
        text: 'Our aim to build a long lasting relationship with our clients. Our support does not end with the launch of your website or product. We will be there to help you in all your tech and marketing needs well into the future!',
    
    },

]