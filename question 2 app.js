// src/App.js

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Navlink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowsCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <nav>
                <u1>
                    <li>
                        <Navlink exact to="/" activeClassName="active">Home</Navlink>
                    </li>
                    <li>
                        <NavLink to="/character" activeClassName="active">Browse Characters</NavLink>
                    </li>
                    <li>
                        <Navlink to="/comics" activeClassName="active">Comics</Navlink>
                    </li>
                </u1>
            </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/character" component={BrowseCharacters} />
                <Route path="/character/:id" component={CharactersDetails} />
                <Route exact path="/comics" component={Comics} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>

   );
}

export default App;

