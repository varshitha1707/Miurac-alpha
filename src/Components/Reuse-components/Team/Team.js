import React from 'react'
import { Container, Grid} from '@material-ui/core';
import photo1 from '../../../Assets/img/Team/photo1.png'
import photo2 from '../../../Assets/img/Team/photo2.png'
import photo3 from '../../../Assets/img/Team/photo3.png'
import './Team.css'

function Team() {
    // Team details
    const team=[
        {
            id:1,
            name:'Sanjeev',
            designation:'Founder,CEO',
            photo:photo1,
        },
        {
            id:2,
            name:'Raghav Sankaran',
            designation:'Ui designer',
            photo:photo2,
        },
        {
            id:3,
            name:'Sanjeev',
            designation:'Founder,CEO',
            photo:photo3,
        },
        {
            id:4,
            name:'Raghav Sankaran',
            designation:'Ui designer',
            photo:photo1,
        },
        {
            id:5,
            name:'Sanjeev',
            designation:'Founder,CEO',
            photo:photo1,
        },
        {
            id:6,
            name:'Raghav Sankaran',
            designation:'Ui designer',
            photo:photo2,
        },


    ]
    return (
        <Container className="Team" alignItems="center" justifyContent="center" alignContent="center" >
            <div className="Team-text" >
            <h1>Our Team</h1>
            </div>
            {/* Team Grid */}
            <Grid container spacing={0} className="Team-container" spacing={0} style={{ }}>
                {/* Mapping out team details */}
                {team.map(team=>(
                <Grid item className="Team-item" xs={10} sm={8} md={6} lg={6}>
                    <div>
                        <div className="Team-image">
                            <img src={team.photo} alt="" className="Team-img" style={{margin:"auto"}}/>
                        </div>
                        <div className="Team-name">
                            <h3>{team.name}</h3>
                        </div>
                        <div className="Team-designation">
                            <h4>{team.designation}</h4>
                        </div>
                    </div>
                </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Team
