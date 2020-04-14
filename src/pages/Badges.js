import React from 'react'

import './styles/Badges.css'
import NavBar from '../components/NavBar'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import { Link } from 'react-router-dom'

class Badges extends React.Component {
    state = {
        data: [
            {
                id:1111,
                firstName: 'Federico',
                lastName: 'Quintero',
                email: 'mago362@gmail.com',
                jobTitle: 'Software Engineeer',
                twitter: 'ikoTito',
                avatarUrl: 'https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80'
            },
            {
                id:2222,
                firstName: 'Daniela',
                lastName: 'Sotelo',
                email: 'laura.saltos@gmail.com',
                jobTitle: 'Tourism',
                twitter: 'DanXotelo',
                avatarUrl: 'https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80'
            },
            {
                id:3333,
                firstName: 'Goku',
                lastName: 'Mauricio',
                email: 'dbs@gmail.com',
                jobTitle: 'Super Saiyajin',
                twitter: 'saiyaMan',
                avatarUrl: 'https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80'
            }
        ]

    }
    render(){
        return(

            <div>
                <NavBar />

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo" src={confLogo} alt="ConfLogo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges