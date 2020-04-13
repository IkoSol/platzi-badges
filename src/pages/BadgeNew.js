import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import NavBar from '../components/NavBar'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName="Federico"
                            lastName="Quintero"
                            twitter="mago362"
                            jobTitle="Fullstack Developer"
                            avatarUrl="https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80"/>
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew