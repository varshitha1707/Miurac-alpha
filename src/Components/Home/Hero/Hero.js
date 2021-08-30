import React, { Component } from 'react'
import './Hero.css'
import icon1 from '../../../Assets/img/Hero/subtitle-icon1.svg'
import icon2 from '../../../Assets/img/Hero/subtitle-icon2.svg'
import icon3 from '../../../Assets/img/Hero/subtitle-icon3.svg'
import herosvg from '../../../Assets/img/Hero/home-img.svg'

export class Hero extends Component {
    render() {

        // Subtitle text and icons
        const text =[
            {
                id:'1',
                icon: icon1,
                text: "Idea to startup in a month"
            },
            {
                id:'2',
                icon: icon2,
                text: "Tech platform for passionate founders"
            },
            {
                id:'3',
                icon: icon3,
                text: "Strong network support from the Industry experts"
            }
        ]

        return (
            <div className="Hero">
                <div className="Hero-container">
                    {/* hero text div */}
                    <div className="Hero-text" >
                        {/* hero title text */}
                            <div className="Hero-title">
                                <span>We invest in your ideas 
                                    to convert into market
                                    ready Products</span>
                            </div>
                            <div className="Hero-subtitle">
                                {/* mapping out the subtitles */}
                        {text.map(text =>(  
                            <div className="subtitle">
                                    <img src={text.icon} alt="logo" />     
                                <div className="-subtitle" key={text.id}>
                                    <p>{text.text}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        {/* hero buttons */}
                            <div className="Hero-buttons">
                                <button className="button-filled">
                                Get Funded
                                </button>
                                <button className="button-un-filled">
                                Boost your startup
                                </button>
                        </div>
                    </div>
                    {/* hero image div */}
                        <div className="Hero-img">
                            <img src={herosvg} alt="logo" className="home-img"  style={{width:'95%'}}/> 
                        </div>
                </div> 
                {/* clients carousel */}
                <div className="Clients">
                        <h3>hello i am clients</h3>
                </div>
            </div>
        )
    }
}

export default Hero
