import React from 'react'
import './QuoteA.css'

function Quote() {
    return (
        <div className="QuoteA" >
            <div className="QuoteA-all-text">
                <div className="QuoteA-title">
                    {/* About page Quote title */}
                    <h1>We’re always on great ideas and top talent. Let’s work together </h1>
                </div>
                <div className="QuoteA-btn" >
                    {/* About page Quote button */}
                <button className="button-blue-filled" style={{width:"45%"}}>
                View open positions
                </button>
                </div>
            </div>
        </div>
    )
}

export default Quote

