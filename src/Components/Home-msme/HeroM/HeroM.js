import React, { Component } from 'react'
import './HeroM.css'
import herosvg from '../../../Assets/img/HeroM/HeroM.svg'
import Clients from '../../Reuse-components/Clients/Clients'
import { Grid } from '@material-ui/core'

export class Hero extends Component {
    render() {
        return (
            <div className="HeroM">
                <Grid container spacing={0} className="HeroM-container" direction={window.outerWidth<900?'row':'row-reverse'}>
                    {/* hero image div */}
                        <Grid item xs={10} sm={10} md={8} lg={6} className="HeroM-img" style={{width:'75%'}}>
                            <img src={herosvg} alt="logo" className="homeM-img"  style={{width:'80%', float:'right'}}/> 
                        </Grid>
                    {/* hero text div */}
                    <Grid item xs={10} sm={10} md={8} lg={5}  className="HeroM-text" >
                        {/* hero title text */}
                            <div className="HeroM-title">
                                <span>We invest in your ideas 
                                    to convert into market
                                    ready Products</span>
                            </div>
                            <div className="HeroM-subtitle">
                                <p>We are a bunch of passionate designers and developers who aim to encourage the development of technology and innovation always ready for new challenges.</p>
                            </div>
                        {/* hero buttons */}
                        <br/>
                            <div className="HeroM-buttons">
                                <button className="button-filled">
                                Book A Free Consulatation
                                </button>
                                <button className="button-un-filled">
                                See Our Works
                                </button>
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
