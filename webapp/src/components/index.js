import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BattleCard from './battleCard'
import Home from './home';
import ColumnCard from './columnCard';
import Summary from './summary';
import Count from './battleCount';
import Autocomplete from './autocomplete';
import SearchedBattle from './searchedBattle';

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
                {/*}    <Autocomplete
                            options={[
                              "Papaya",
                              "Persimmon",
                              "Paw Paw",
                              "Prickly Pear",
                              "Peach",
                              "Pomegranate",
                              "Pineapple"
                            ]}
                        />  */}
                    </Route>
                    <Route path = "/search" component={SearchedBattle}>
                    </Route>
                    <Route exact path="/count" component={Count}>
                    </Route>

                    <Route exact path="/list" component={ColumnCard}>
                        
                    </Route>
                    <Route exact path="/list/:id/summary" component={Summary}   >
                    </Route>
                    <Route path="/list/" component={BattleCard}>
                        
                    </Route>
                </Switch>    
            </Router>
            </>
        );
    }
}

export default Index;