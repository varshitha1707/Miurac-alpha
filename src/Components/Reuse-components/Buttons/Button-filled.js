import React, { Component } from 'react'
import './Button.css'

export class Buttonfilled extends Component {
    render(props) {
        return (
            <div>
                <button className="button-filled">
                    {props.name}
                </button>
            </div>
        )
    }
}

export default Buttonfilled

