import {
    Link
} from "react-router-dom";

const Beer = () => {
    return (
        <div>
            <Link to="/all-beers"> <h1>All Beers</h1></Link>
            <Link to="/random-beer"> <h1>Random Beer</h1></Link>
      </div>
    );
}

export default Beer;