import { Icon } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Pages/Home/Home.css'
import icon1 from '../../Assets/img/subtitle-icon1.svg'
import icon2 from '../../Assets/img/subtitle-icon2.svg'
import icon3 from '../../Assets/img/subtitle-icon3.svg'
import herosvg from '../../Assets/img/home-img.svg'
import Carousel from '../Reuse-components/Clients/Clients'
// import Buttonfilled from '../Reuse-components/Buttons/Button-filled'

export class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <div className="Hero-title">
                    <h1>
                        We invest in your ideas to 
                        convert into market 
                        ready Products
                    </h1>
                </div>
                <div className="Hero-subtitle">
                    <h2>
                        <img src={icon1} alt="logo" className="subtitle-icon" />      
                        Idea to startup in a month
                    </h2>
                    <h2>
                        <img src={icon2} alt="logo" className="subtitle-icon" /> 
                        Tech platform for passionate founders
                    </h2>
                    <h2>
                        <img src={icon3} alt="logo" className="subtitle-icon" /> 
                        Strong network support from the Industry experts
                    </h2>
                </div>
                <div className="Hero-buttons">
                    <button className="button-filled">
                        Get Funded
                    </button>
                    <button className="button-un-filled">
                        Boost your startup
                    </button>
                    {/* <Buttonfilled name ="GET FUNDED"></Buttonfilled> */}
                </div>
                <div className="Hero-svg">
                    <img src={herosvg} alt="logo" className="home-img" /> 
                </div>

                <div className="Hero-clients">
                   
                </div>
                
            </div>
        )
    }
}

export default Hero
