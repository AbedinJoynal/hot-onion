import './App.css';
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useParams,
} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Lunches from './components/Lunches/Lunches';
import Dinners from './components/Dinners/Dinners';
import Notfound from './components/Notfound/Notfound';
import Itemdetail from './components/Itemdetail/Itemdetail';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Feature from './components/Feature/Feature';
import SearchResult from './components/SearchResult/SearchResult';
import Checkout from './components/Checkout/Checkout';
import Itemdata from './components/MenuData/Itemdata';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/breakfast">
                        <Header></Header>
                        <Banner></Banner>
                        <Menu></Menu>
                        <Feature></Feature>
                        <Footer></Footer>
                    </Route>
                    <Route path="/lunches">
                        <Header></Header>
                        <Banner></Banner>
                        <Lunches></Lunches>
                        <Feature></Feature>
                        <Footer></Footer>
                    </Route>
                    <Route path="/search=:searchQuery">
                        <Header />
                        <Banner />
                        <SearchResult />
                        <Feature />
                        <Footer />
                    </Route>
                    <Route path="/dinner">
                        <Header></Header>
                        <Banner></Banner>
                        <Dinners></Dinners>
                        <Feature></Feature>
                        <Footer></Footer>
                    </Route>
                    <Route path="/review">
                        <Review></Review>
                        <Footer></Footer>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/item/:itemdetails">
                        <Header></Header>
                        <Itemdetail />
                        <Footer></Footer>
                    </Route>
                    <Route path="/checkout">
                        <Header></Header>
                       <Checkout></Checkout>
                       <Footer></Footer>
                    </Route>
                    <Route exact path="/">
                        <Header></Header>
                        <Banner></Banner>
                        <Menu></Menu>
                        <Feature />
                        <Footer></Footer>
                    </Route>
                    <Route path="*">
                        <Notfound></Notfound>
                        <Footer></Footer>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
