import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="app">
         {/*It act as a switch case */}
        <Switch>
          {/* Here we can define so many routes */}
          <Route path='/checkout'>
            <Header/>
          <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>LOGIN</h1>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
