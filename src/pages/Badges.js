import React from 'react'

import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import { Link } from 'react-router-dom'

import api from '../api'

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    // constructor(props){
    //     super(props);
    //     console.log("1. Constructor");

    //     this.state = {
    //         loading: true,
    //         error: null,
    //         data: undefined
    //     }
    // }

    // componentDidMount(){
    //     console.log("3. componentDidMount()");

    //     this.timeoutId = setTimeout(()=> {
    //         this.setState({
    //             data: [

    //                 {
    //                     id:1111,
    //                     firstName: 'Federico',
    //                     lastName: 'Quintero',
    //                     email: 'mago362@gmail.com',
    //                     jobTitle: 'Software Engineeer',
    //                     twitter: 'ikoTito',
    //                     avatarUrl: 'https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80'
    //                 },
    //                 {
    //                     id:2222,
    //                     firstName: 'Daniela',
    //                     lastName: 'Sotelo',
    //                     email: 'laura.saltos@gmail.com',
    //                     jobTitle: 'Tourism',
    //                     twitter: 'DanXotelo',
    //                     avatarUrl: 'https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80'
    //                 },
    //                 {
    //                     id:3333,
    //                     firstName: 'Goku',
    //                     lastName: 'Mauricio',
    //                     email: 'dbs@gmail.com',
    //                     jobTitle: 'Super Saiyajin',
    //                     twitter: 'saiyaMan',
    //                     avatarUrl: 'https://s.gravatar.com/avatar/95db14a1a5d12817cd654ad1b438be60?s=80'
    //                 }
    //             ]
    //         })
    //     },3000)
    // }

    // componentDidUpdate(prevProps, prevState){ //recibe dos argumentos prevProps y prevState, argumentos previos que tenían que sirven para compararlos
    //     console.log("5. ComponentDidUpdate");
    //     console.log({
    //         prevProps: prevProps,
    //         prevState: prevState
    //     })

    //     console.log({
    //         props: this.props,
    //         state: this.state
    //     })  
    // }

    // componentWillUnmount(){
    //     console.log('6. ComponentWillUnmount')
    //     clearTimeout(this.timeoutId)
    // }

    componentDidMount(){
        this.fetchData()
    }

    //PAra llamar una API hay que hacer:
    fetchData = async () =>{
        this.setState({loading: true, error: null}) //1.Declarar estado

        try{ //2. Comenzar la llamada a la API
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch(error){
            this.setState({loading: false, error: error})
        }
    }

    render(){
        // console.log("2. Render");
        if(this.state.loading === true){
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges