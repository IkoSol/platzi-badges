import React from 'react'

import './styles/Home.css'
import confLogo from '../images/platziconf-logo.svg'
import astro from '../images/astronauts.svg'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="Home__Background">
                    <div className="Home__container">
                        <div className="Home__description">
                            <figure className="Home__containerConfLogo">
                                <img className="Home__conf-logo" src={confLogo} alt="ConfLogo"/>
                            </figure>
                            <h3 className="title-text-style">PRINT YOUR BADGES</h3>
                            <h6 className="text"><b>The easiest way to manage your <br/>conference</b></h6>
                            <div className="Home__buttons">
                                <Link className="btn btn-primary" to="/badges">Start now</Link>
                            </div>
                        </div>
                        <figure className="Home__astroContainer">
                            <img className="Home__astro-logo" src={astro} alt="Astronauts"/>
                        </figure>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home