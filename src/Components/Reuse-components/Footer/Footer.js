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
                      {/* Footer section-1 */}
                      <div className="Footer-heading">
                        <a href="/about">
                        <h3>About</h3>
                        </a>
                      </div>
                      <a>About us</a>
                      <a>What we do</a>
                      <a>Our team</a>
                      <a>Careers</a>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                      {/* Footer section 2 */}
                      <a href="/home">
                      <h3>Services</h3>
                      </a>
                      <a>Web Development</a>
                      <a>App Development</a>
                      <a>Internal Tools</a>
                      <a>UI/UX Design</a>
                      <a>Product Development</a>
                      <a>Graphic Design</a>
                    </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                        {/* Footer section 3 */}
                        <a href="/">
                        <h3>Our Works</h3>
                        </a>
                        <a>Something</a>
                        <a>Something</a>
                        <a>Something</a>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={3} className="Footer-item">
                        {/* Footer section 4 */}
                        <a href="/contact">
                        <h3>Contact Us</h3>
                        </a>
                        <a>Something</a>
                        <a>Something</a>
                        <a>Something</a>
                      </Grid>
                  </Grid>
                  <Grid container spacing={3} className="Footer-item-container" >
                    <Grid item sm={10} md={6} lg={6} item className="Footer-Miurac-logo">
                      {/* Miurac logo */}
                      <div className="Footer-logo-icon">
                        <img src={logo} alt="logo" className="footerlogo-img"  />
                      </div>
                      <div className="Footer-logo-title">
                        MIURAC
                      </div>
                    </Grid>
                    <Grid item  sm={10} md={6} lg={6} item className="Footer-Socials">
                      {/* Socials */}
                    <p>Follow us on Social media</p>
                    </Grid>
                  </Grid>
                </Container>
            </footer>
    )
}

export default Footer
