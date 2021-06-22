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
                <div>
                   <img src={this.state.beer.image_url} alt="" /> 
                   <h1>{this.state.beer.name}</h1>
                   <p>{this.state.beer.tagline}</p>
                   <p>{this.state.beer.first_brewed}</p>
                   <p>{this.state.beer.attenuation_level}</p>
                   <p>{this.state.beer.description}</p>
                </div>
                 : "LOADING"}

                <Link className="link_beer" to="/"><img src="./img/Logo.png" alt="" /></Link>
            </div>
        );
    }
}

export default RandomBeer;