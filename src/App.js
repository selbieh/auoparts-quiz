import React, { Component } from 'react';
import './App.css';
import LayOut from "./Layout"
import {Switch,Route,withRouter} from "react-router-dom"
import CarsTable from './CarsTable/CarsTable';
import CarSubType from './CarsTable/CarSubType/CarSubType';
import Year from './CarsTable/Year/Year';
import FinalResulte from './CarsTable/finnalResulte';

            



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <LayOut>

           <Switch>
           <Route path="/aboutUs" exact render={()=>(<p>About us page</p>)}/>

                <Route path="/" exact component={CarsTable}/>
                <Route path="/:sub/:type" exact component={Year}/>
                <Route path="/:sub/:type/:year"  component={FinalResulte}/> 
 

                <Route path="/:sub" exact component={CarSubType}/>

 

           </Switch>
              
            

         </LayOut>

        </header>
      </div>

    );
  }
}

export default withRouter(App);
