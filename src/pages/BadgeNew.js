import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component{
    state = {
        disabled: false,
        loading: false,
        error: null,
        form: {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
        }
    }

    handleChange = e => {
        this.setState({
            form: {               
                ... this.state.form, //Operador de propagacion
                [e.target.name]: e.target.value,
            },
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log("CREATING!")
        this.setState({
            loading: true, error:  null
         })

        try{
            console.log("SUCCESS!")
            await api.badges.create(this.state.form)
            this.setState({
                loading: false
             }) 

             this.props.history.push('/badges')
        } catch (error){
            console.log("ERROR!")
            this.setState({
                loading: false, error: error
            })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>   
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-img img-fluid" src={header} alt="ConfLogo"/>
                </div>   

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                            />
                        </div>

                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                disabled={this.state.disabled}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew