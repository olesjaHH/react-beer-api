import {
    Link
} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="all_beer">
                <img src="./img/all_beer.jpg" alt="" />
                <Link to="/all-beers"> <h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iure eius mollitia quis tempora atque vitae velit sint quasi dicta.</p>
            </div>
            <div className="random_beer">
                <img src="./img/random_beer.jpg" alt="" />
                <Link to="/random-beer"> <h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iure eius mollitia quis tempora atque vitae velit sint quasi dicta.</p>
            </div>
      </div>
    );
}

export default Home;