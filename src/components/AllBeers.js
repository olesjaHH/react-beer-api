import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

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
                {this.state.isLoaded ?
                    this.state.beer.map((ele, i) => 
                    <div className="beer_item">
                      <img src={ele.image_url} alt="" /> 
                      <div className="beer_info">
                        <h1>{ele.name}</h1>
                        <p>{ele.tagline}</p>
                        <div>created by: {ele.contributed_by}</div>
                        <Link to={`/all-beers/${ele._id}`}> <h1>Detail</h1></Link>
                    </div>
                </div>)
                    : "Loading ..."
                }
            </div>
                <Link className="link_beer" to="/"><img src="./img/Logo.png" alt="" /></Link>
            </div>
        );
    }
}
 
export default AllBeers;