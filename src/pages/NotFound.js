import React from 'react'
import './styles/NotFound.css'
import image from '../images/astronaut-not-found.png'
import {Link} from 'react-router-dom'


function NotFound(){
    return (
        <React.Fragment>
            <div className="background">
                <div className="description">
                    <p className="title-error">Error: 404</p>
                    <p className="title-description">Page not found</p>
                    <div className="back-button">
                        <Link className="btn btn-primary" to="/">Back to Home</Link>
                    </div>
                </div>
                <img src={image} alt="Astronaut" width="300" height="500"/>
            </div>
        </React.Fragment>
    )
}

export default NotFound