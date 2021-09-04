import React from 'react'
import Grid from '../../Reuse-components/AlternatingGrid/AlternatingGrid'
import value1 from '../../../Assets/img/Values/value1.png'
import value2 from '../../../Assets/img/Values/value2.png'
import value3 from '../../../Assets/img/Values/value3.png'
import value4 from '../../../Assets/img/Values/value4.png'
import './Values.css'

function Values() {
    return (
        <div className="Values-UpContainer">
            {/* Using reusable component alternating grid */}
            <Grid values={values} name={'Values'}/>
        </div>
    )
}

export default Values
// Values mapped out
const values= [
    {
        id: 1,
        row:1,
        img: value1,
        title: 'We believe in passionate people',
        text: 'Innovation is brought by unreasonably passionate people and brutally honest minds. If you work on something you believe is very important, we’re there to help you.',
    
    },
    {
        id: 2,
        row:2,
        img: value2,
        title: 'Closing the tech gap',
        text: 'Tech for many is still a costly affair and a hard access. Miurac hopes to bridge the tech gap by providing affordable tech to all MSME in India by 2030.',
    
    },
    {
        id: 3,
        row:3,
        img: value3,
        title: 'Promote Equal competition ',
        text: 'A cricket team should not win because they have better kit. A business should not succeed because they have better tech. Miurac promotes an equal opportunity to technology for all businesses.',
    
    },
    {
        id: 4,
        row:4,
        img: value4,
        title: 'Community of passionate founders',
        text: 'Join the community of founders who made their dream true. Get guidance and mentorship from successful people all over the world.',
    
    },

]