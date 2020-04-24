import React from 'react'

import './styles/Badge.css'
import twitterLogo from '../images/twitter-icon.png'
import { Link } from 'react-router-dom'
import Gravatar from '../components/Gravatar'

class BadgesList extends React.Component{
    render(){
        if (this.props.badges.length ===0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) =>{
                    return(
                        <div>
                            <li key={badge.id} className="row Badges__item-container">
                                <Gravatar className="Badges__item-avatar" email={badge.email} alt="Avatar"/>
                                <div className="margin-top margin-left">
                                    <span className="Badges__item-name-text">{badge.firstName} {badge.lastName}</span><br/>
                                    <img className="Badges__item-twitter-icon" src={twitterLogo} alt="Twitter icon"/>
                                    <span className="Badges__item-twitter-text">@{badge.twitter}</span><br/>
                                    <span className="Badges__item-jobTitle-text">{badge.jobTitle}</span>
                                </div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList