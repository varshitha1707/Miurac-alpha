import React from 'react'
import NavBar from '../../Reuse-components/NavBar/Nav'
import './HeroA.css'

function HeroA() {
    return (
        <div className="HeroA" >
            <div className="HeroA-all-text">
                {/* About page Hero title */}
                <div className="HeroA-title">
                    <h1>Hey, We’re Miurac.👋</h1>
                </div>
                {/* About page hero subtext */}
                <div className="HeroA-text">
                    <p>Concept of Miura fold, a method of folding a sheet of paper into a smaller area. We at Miurac aims to compress various technologies to a densely packed simplistic tool.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroA
