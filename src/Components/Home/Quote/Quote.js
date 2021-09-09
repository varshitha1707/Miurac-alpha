import React from 'react'
import './Quote.css'
import art1 from '../../../Assets/art/blue-circle.svg'
import art2 from '../../../Assets/art/triangles.svg'
import art3 from '../../../Assets/art/unfilled-circle.svg'


function QuoteA() {
    return (
        <div className="Quote" >
            <div className="quote-art">
            <img src={art1} alt="" className="circle-quote" />
            <img src={art2} alt="" className="triangles-quote"/>
            <img src={art3} alt="" className="unfilled-quote"/>
            </div>
            <div className="Quote-all-text">
                {/* Home page Quote text */}
                <div className="Quote-title">
                    <h1>The <span style={{ color: '#00A9F5'}} >art</span> of Tech management</h1>
                </div>
                <div className="Quote-text">
                    <p>Life is too short to search for a tech cofounder. All the tech you want is readily available or developed instantly for you</p>
                </div>
            </div>
        </div>
    )
}

export default QuoteA

