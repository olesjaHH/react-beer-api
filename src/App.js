import './App.scss';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/all-beers" component={AllBeers} exact />
          <Route path="/all-beers/:beerdetail" component={BeerDetail} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch> 

      </div>
    </Router>
  );
}

export default App;
