import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './Offerings.css'
import { CardContent, CardHeader, CardMedia, Container, Typography } from '@material-ui/core';
import uxui from '../../../Assets/img/Offerings/uxuidesign.svg'
import webdev from '../../../Assets/img/Offerings/webdev.svg'
import appdev from '../../../Assets/img/Offerings/appdev.svg'
import graphic from '../../../Assets/img/Offerings/graphicdesign.svg'
import intools from '../../../Assets/img/Offerings/internaltools.svg'
import prodev from '../../../Assets/img/Offerings/productdev.svg'

export default function Offerings() {

    // All the Offerings section cards information
    const offering = [ 
        {
            "id": "1",
            "img": uxui,
            "name": "Ux/UI Design",
            "description": "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
        },
        {
            "id": "2",
            "img": webdev,
            "name": "Web Development",
            "description": "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
        },
        {
            "id": "3",
            "img": appdev,
            "name": "App Development",
            "description": "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
        },
        {
            "id": "4",
            "img": graphic,
            "name": "Graphic Design",
            "description": "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
        },
        {
            "id": "5",
            "img": intools,
            "name": "Internal Tools",
            "description": "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
        },
        {
            "id": "6",
            "img": prodev,
            "name": "Product Development",
            "description": "We build beautiful, responsive and feature-rich web based applications that solve real customer problems",
        },
    ];

  return (
    //   Offerings section
    <div className="Offerings"> 
        <div className="Offerings-title">
            <h1>Our Offerings</h1>
        </div>
        {/* Grid */}
        <Grid container 
        id="Container"
        spacing={2} 
        justifyContent="center"
        alignItems="center"
        >
            {/* mapping out the cards information */}
            {offering.map(note =>(
            <Grid item xs={8} sm={7} md={6} lg={4} >
                    {/* Card image */}
                <Card id="Card" elevation={2} >
                    <CardMedia align="center"  >
                        <img src={note.img} alt="img" id="Card-img"/>
                    </CardMedia>
                    {/* Card title and description */}
                    <CardContent>
                        <Typography 
                        id="subtitle"
                        variant="h5"
                        align="center"
                        >
                            {note.name}
                        </Typography>
                        <Typography
                        id="description" 
                        >
                            {note.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    </div>
  );
}