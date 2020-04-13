import React from 'react';

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80" alt="Avatar"/>
                    <h1>Federico <br/> Quintero</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Fullstack Developer</h3>
                    <div>@mago362</div>
                </div>

                <div className="Badge__footer">
                    #PlatziConf
                </div>
            </div>
        )
    }
}

export default Badge