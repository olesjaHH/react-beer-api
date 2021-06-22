import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class BeerDetail extends Component {
    state = {
        beer: {},
        isLoaded: false
    }
    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params)
        let id = this.props.match.params.beerdetail
        console.log(id)
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
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
                      {/* <p>created by: {this.state.beer.contributed_by}</p> */}
                    </div>
                    : "LOADING"}

                <Link className="link_beer" to="/"><img src="./img/Logo.png" alt="" /></Link>
            </div>
        );
    }
}

export default BeerDetail;