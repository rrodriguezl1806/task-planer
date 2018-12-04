import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routers
import App from './app';

class Routers extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component = { App }/>
                
                <Route path="**" component = { App }/>
            </Switch>
        </Router>
    )
  }
}

export default Routers
