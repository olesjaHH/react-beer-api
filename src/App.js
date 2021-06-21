import './App.css';

import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import Beer from './components/Beer';
import BeerDetail from './components/BeerDetail';
import Nav from './components/Nav';

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
          <Route path="/all-beers" component={AllBeers} />
          <Route path="/all-beers/:beerdetail" component={BeerDetail} />
          <Route path="/random-beer" component={RandomBeer} />
          {/* <Route path="/beerdetail" component={BeerDetail} /> */}
          <Route path="/beer" component={Beer} />
          <Route path="/nav" component={Nav} />
        </Switch> 

      </div>
    </Router>
  );
}

export default App;
