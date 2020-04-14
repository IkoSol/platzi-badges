import React from 'react'

import './styles/Badge.css'
import twitterLogo from '../images/twitter-icon.png'

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) =>{
                    return(
                        <div>
                            
                                <li key={badge.id} className="row Badges__item-container">

                                    <img className="Badges__item-avatar" src={badge.avatarUrl} alt="Avatar"/>                                    
                            
                                    <div className="margin-top margin-left">
                                        <span className="Badges__item-name-text">{badge.firstName} {badge.lastName}</span><br/>
                                        <img className="Badges__item-twitter-icon" src={twitterLogo} />
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