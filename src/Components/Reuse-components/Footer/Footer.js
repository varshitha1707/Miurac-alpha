import { Container, Grid } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import logo from '../../../Assets/img/miurac.svg'

function Footer() {
    return (
            <footer className="Footer">
              <Container spacing={3}  className="Footer-container">
                <Grid container spacing={3} className="Footer-item-container" >
                    <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                      <div className="Footer-heading">
                        <h3>About</h3>
                      </div>
                      <a>About us</a>
                      <a>What we do</a>
                      <a>Our team</a>
                      <a>Careers</a>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                      <h3>Services</h3>
                      <a>Web Development</a>
                      <a>App Development</a>
                      <a>Internal Tools</a>
                      <a>UI/UX Design</a>
                      <a>Product Development</a>
                      <a>Graphic Design</a>
                    </Grid>
                    {/* <Grid item > */}
                      <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                        <h3>Services</h3>
                        <a>Something</a>
                        <a>Something</a>
                        <a>Something</a>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                        <h3>Contact us</h3>
                        <a>Something</a>
                        <a>Something</a>
                        <a>Something</a>
                      </Grid>
                    {/* </Grid> */}
                  </Grid>
                  <Grid container spacing={3} className="Footer-item-container" >
                    <Grid item sm={10} md={6} lg={6} item className="Footer-Miurac-logo">
                      <div className="Footer-logo-icon">
                        <img src={logo} alt="logo" className="footerlogo-img"  />
                      </div>
                      <div className="Footer-logo-title">
                        MIURAC
                      </div>
                    </Grid>
                    <Grid item  sm={10} md={6} lg={6} item className="Footer-Socials">
                    <p>Follow us on Social media</p>
                    </Grid>
                  </Grid>
                </Container>
            </footer>
    )
}

export default Footer
