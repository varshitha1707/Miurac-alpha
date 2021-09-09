import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import icon1 from '../../../Assets/img/Hero/subtitle-icon1.svg'
import icon2 from '../../../Assets/img/Hero/subtitle-icon2.svg'
import icon3 from '../../../Assets/img/Hero/subtitle-icon3.svg'
import herosvg from '../../../Assets/img/Hero/home-img.svg'
import Clients from '../../Reuse-components/Clients/Clients'
import { Grid } from '@material-ui/core'

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
                <Grid container spacing={0} className="Hero-container" direction={window.outerWidth<900?'row':'row-reverse'}>
                    {/* hero image div */}
                        <Grid item xs={10} sm={10} md={8} lg={6} className="Hero-img" style={{width:'85%'}}>
                            <img src={herosvg} alt="logo" className="home-img"  style={{width:'100%'}}/> 
                        </Grid>
                    {/* hero text div */}
                    <Grid item xs={10} sm={10} md={8} lg={5}  className="Hero-text" >
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
                        <br/>
                            <div className="Hero-buttons">
                                <Link to="/contact">
                                    <button id="button-filled">
                                    Get Funded
                                    </button>
                                </Link>
                                <Link to="/contact">
                                    <button id="button-un-filled">
                                    Boost your startup
                                    </button>
                                </Link>
                        </div>
                    </Grid >
                </Grid > 
                {/* clients carousel */}
                <Clients/>
            </div>
        )
    }
}

export default Hero
