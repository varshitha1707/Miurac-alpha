import React, { Component } from 'react'
import './Button.css'

export class Buttonunfilled extends Component {
    render(props) {
        return (
            <div>
                <button className="button-un-filled">
                    {props.name}
                </button>
            </div>
        )
    }
}

export default Buttonunfilled