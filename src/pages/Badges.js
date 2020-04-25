import React from 'react'

import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoader'
import PageError from '../components/PageError'
import { Link } from 'react-router-dom'

import api from '../api'

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
        this.intervalId = setInterval(this.fetchData, 5000) //Polling para que cada 5 segundos recupere datos
    }

    //PAra llamar una API hay que hacer:
    fetchData = async () =>{
        this.setState({loading: true, error: null}) // 1.Declarar estado

        try{ //2. Comenzar la llamada a la API
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch(error){
            this.setState({loading: false, error: error})
        }
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        // console.log("2. Render");
        if(this.state.loading === true && !this.state.data){
            return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error} />
        }

        return(
            <React.Fragment>
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
                            {this.state.loading && <MiniLoader />}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges