import React from 'react'
import { Container, Grid} from '@material-ui/core';
import img1 from '../../../Assets/img/WhatUs/big.png'
import img2 from '../../../Assets/img/WhatUs/small.png'
import './WhatUs.css'
const  WhatUs = () => {
    const values=[
        {
            id:1,
            img1:img1,
            title: "Digital Products that People love to use",
            text:"We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
            img2:img2,
        },
        {
            id:2,
            img1:img1,
            title: "Enterprise software that doesn’t suck", 
            text:"We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
            img2:img2,
        },
        {
            id:3,
            img1:img1,
            title: "Website that tells about brand’s story",
            text:"We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
            img2:img2,
        },
    ]
    // function to reverse row every alternate row
    function alternate(id) {
        var dir = "row";
        if(id === 1 || id === 3 ) {
            dir = "row-reverse";
        }
        return dir;
}
    return (
    <div className="WhatUs-Main-Container">
        
        <div className="WhyUs-main-title">
                <h1>What we <span style={{color:'#00A9F5'}}>do </span></h1>
                <p>Strategy, design and development across all platforms</p>
            </div>

        <div className="WhatUs-Main">
            {/* mapping out the values */}
            {values.map(data=>(
                <Grid container className="WhatUs-grid-container" key={data.id} direction={alternate(data.id)} >                           
                    
                    <Grid item className="WhatUs-grid-item-img" xs={12} sm={12} md={6} lg={6} >
                        {/* image */}
                        <div>
                            <img src={data.img1} alt="" className="WhatUs-img1"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ margin:"auto"}}>
                        {/* text */}
                        <div style={{ width:"85%"}}>
                            <h3 className="WhatUs-grid-title">
                                {data.title}
                            </h3>
                            <p className="WhatUs-grid-text" >
                                    {data.text}
                            </p>
                        </div> 
                        <div>
                            <img src={data.img2} alt="" className="WhatUs-img2"/>
                        </div>
                    </Grid>
                </Grid> 
            ))} 
            </div>
        </div>
    )
}

export default WhatUs
