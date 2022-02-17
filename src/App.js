import './App.css';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Lunches from './components/Lunches/Lunches';
import Dinners from './components/Dinners/Dinners';
import Notfound from './components/Notfound/Notfound';
import Itemdetail from './components/Itemdetail/Itemdetail';
import Review from './components/Review/Review';

export const UserContext = createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'yahoo'}>
        <Header></Header>
        <Banner></Banner>
        <Router>
          <Switch>
            <Route path="/breakfast">
              <Menu></Menu>
            </Route>
            <Route path="/lunches">
              <Lunches></Lunches>
            </Route>
            <Route path="/dinner">
              <Dinners></Dinners>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/item/:itemdetails">
              <Itemdetail></Itemdetail>
            </Route>
            <Route exact path="/">
              <Menu></Menu>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
