import React, { Component } from 'react';
/* import { useParams } from "react-router-dom"; */
import {
    Link
} from "react-router-dom";

class BeerDetail extends Component {
    state = {
        beer: {},
        isLoaded: false
    }
    componentDidMount() {
        
        console.log(this.props.match.params)
        // letzter teil hängt von dem :name in der App ab
        let id = this.props.match.params.beerdetail
        console.log(id)
        // console.log(this.props.match.params.myId)
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
                    <img src={this.state.image_url} alt="" /> 
                      <h1>{this.state.name}</h1>
                      <p>{this.state.tagline}</p>
                      <p>created by: {this.state.contributed_by}</p>
                    </div>
                    : "LOADING"}

                <Link to="/beer">Beer</Link>
            </div>
        );
    }
}

export default BeerDetail;