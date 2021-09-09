import React from 'react'
import { Link } from 'react-router-dom'
import './QuoteA.css'
import art1 from '../../../Assets/art/blue-circle.svg'
import art2 from '../../../Assets/art/triangles.svg'
import art3 from '../../../Assets/art/unfilled-circle.svg'

function Quote() {
    return (
        <div className="QuoteA" >
        <div className="quoteA-art">
        <img src={art1} alt="" className="circle-quoteA" />
        <img src={art2} alt="" className="triangles-quoteA"/>
        <img src={art3} alt="" className="unfilled-quoteA"/>
        </div>
            <div className="QuoteA-all-text">
                <div className="QuoteA-title">
                    {/* About page Quote title */}
                    <h1>We’re always on great ideas and top talent. Let’s work together </h1>
                </div>
                <div className="QuoteA-btn" >
                    {/* About page Quote button */}
                <Link to="/contact">
                    <button className="button-blue-filled" style={{width:"45%"}}>
                    View open positions
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Quote

