import { Container, Paper, Grid } from '@material-ui/core'
import React from 'react'
import onmenu from '../../../Assets/img/Clients/onmenu.svg'
import edufeat from '../../../Assets/img/Clients/edufeat.svg'
import isbl from '../../../Assets/img/Clients/isbl.svg'
import storehouse from '../../../Assets/img/Clients/storehouse.svg'
import Carousel from 'react-elastic-carousel'
import './Clients.css'

function Clients() {
    const clients = [
        {
            id: 1,
            name: 'Onmenu',
            img:onmenu
        },
        {
            id: 2,
            name: 'Edufeat',
            img:edufeat
        },
        {
            id: 3,
            name: 'ISBL',
            img:isbl
        },
        {
            id: 4,
            name: 'Storehouse',
            img:storehouse
        },
        {
            id: 5,
            name: 'Onmenu',
            img:onmenu
        },
    ]

    const breakpoints =[
        { width: 280, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1400, itemsToShow: 4 },
    ]


    return (
        <div className="Clients">
            <div className="Clients-Title" style={{
                textAlign:'center',
                fontFamily:' Lato',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '35px',
                margin:'0px',
                color: '#0A2540',
            }}>
            <h3>Our Clients</h3>
            </div>
            <Carousel 
            breakPoints={breakpoints} 
            enableAutoPlay={true} 
            showArrows={false} 
            style={{margin:'-45px 0px'}}>
                {clients.map(client => (
                        <Grid Container className="container">
                            <Grid item className="grid-item" style={{
                                width: '350px',
                                paddingLeft: '60px',
                            }}>
                                <div className="logo" key={client.id}>
                                    <img src={client.img} alt={client.img} width = "200" height = "200"/>
                                </div>
                            </Grid>
                        </Grid>
                ))}
            </Carousel>
        </div>
    )
}

export default Clients




