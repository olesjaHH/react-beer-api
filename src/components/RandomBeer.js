import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

const RandomBeer = () => {
    return ( 
        <div>
           <Link to="/beer">Beer</Link>
        </div>
     );
}
 
export default RandomBeer;