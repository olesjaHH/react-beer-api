import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

class RandomBeer extends Component {
    state = {
        beer: [],
        isLoaded: false
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => {
                this.setState({ beer: json, isLoaded: true });
            })
    }

    render() {
        
        return (
            <div className="beerDetail">
                {this.state.isLoaded ?
                <div className="beer-style-detail">
                   <img src={this.state.beer.image_url} alt="" /> 
                   <h1>{this.state.beer.name}</h1>
                   <p className="yellow-style">{this.state.beer.tagline}</p>
                   <p className="grey-style">First brewed: <span>{this.state.beer.first_brewed}</span></p>
                   <p className="grey-style">Attenuation level: <span>{this.state.beer.attenuation_level}</span></p>
                   <p className="desc-style">{this.state.beer.description}</p>
                </div>
                 : "LOADING"}

                <Link className="link_beer" to="/"><img src="./img/Logo.png" alt="" /></Link>
            </div>
        );
    }
}

export default RandomBeer;