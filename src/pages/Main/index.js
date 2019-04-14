import React, { Component } from 'react';
import './styles.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default class index extends Component {
    state= { 
        newBox:'',

    }

    handleSubmit= async (e) => {
        e.preventDefault();
        const response = await api.post('boxes',{
            title:this.state.newBox
        })        
        this.props.history.push(`/box/${response.data._id}`)
    }

    handleInputChange=(e) =>{
        this.setState({newBox:e.target.value})
    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit} action="">
                    <img src={logo} alt=""/>
                    <input placeholder="Criar umbox" value={this.state.newBox} onChange={this.handleInputChange} />
                    <button type="submit">Criar </button> 
                </form>
            </div>            
        );
    }
}