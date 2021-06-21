import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import BeerDetail from './BeerDetail';

class AllBeers extends Component {
    state = { 
        beer: [],
        isLoaded: false
     }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                console.log(json[0].image_url)
                this.setState({ beer: json, isLoaded: true });
            })
    }
    render() { 
        return ( 
            <div>
                <div className="api">
                {/* Das map wird erst ausgeführt, wenn der isLoaded-State true ist. Sonst wird Loading gezeigt */}
                {this.state.isLoaded ?
                    this.state.beer.map((ele, i) => <div>
                      <img src={ele.image_url} alt="" /> 
                      <h1>{ele.name}</h1>
                      <p>{ele.tagline}</p>
                      <p>created by: {ele.contributed_by}</p>
                    <Link to={`/beerdetail/${ele._id}`}>{ele.name}</Link>
                    </div>)
                    : "Loading ..."
                }
            </div>
                <Link to="/beer">Beer</Link>
            </div>
        );
    }
}
 
export default AllBeers;