import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BattleCard from './battleCard'
import Home from './home';
import ColumnCard from './columnCard';
import Autocomplete from './autocomplete';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";

class Index extends React.Component{
    render()
    {
        return(
        	<>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <Autocomplete
                            options={[
                              "Papaya",
                              "Persimmon",
                              "Paw Paw",
                              "Prickly Pear",
                              "Peach",
                              "Pomegranate",
                              "Pineapple"
                            ]}
                        />
                    </Route>
                    <Route exact path="/list">
                        <ColumnCard />
                    </Route>
                    <Route exact path="/list/id">
                        <BattleCard />
                    </Route>
                </Switch>    
            </Router>
            </>
        );
    }
}

export default Index;