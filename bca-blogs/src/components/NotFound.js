import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>

            <img id='error-image' src="https://media.istockphoto.com/id/1324403502/vector/missile-crashed-page-not-found-error-404-robot-ran-mascot-character-support-service-center.jpg?s=612x612&w=0&k=20&c=dRh45K4M8AfHnz2yUJEnGpGm1hYXY1S20a6CA32JynA=" alt="Error Image" />
            <Link to="/"><button id='error-btn'>Back To Home</button></Link>
        </div>
    )
}

export default NotFound