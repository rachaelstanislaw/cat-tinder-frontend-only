import React, { Component } from 'react'
// imports routing components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import the Header component
import Header from '../components/Header'
// import the CatList component
import CatList from './CatList'
// import the NewCat component
import NewCat from './NewCat'


class Cats extends Component{
  constructor(props){
    super(props)
    this.state = {
      // mock data used to create a ux
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }

  // method that gets passed to NewCat through the component call and returns the newcat form object
  handleSubmit = (newcat) => {
    // logging the newcat object to endure it has been created
    console.log(newcat)
  }

  render(){
    return(
      <div>
        {/* calls the Header component */}
        <Header />
	      <Router>
				  <Switch>
            {/* Add a route see all the cats from the mock data in state */}
            {/* Calls the CatList component and passes the state object of all the cats */}
          	<Route
              exact path="/newcat"
              render={(props) => <NewCat handleSubmit={ this.handleSubmit } /> }
            />
          	<Route
              exact path="/catlist"
              render={(props) => <CatList cats={ this.state.cats } /> }
            />
				  </Switch>
			  </Router>
      </div>
    )
  }
}

export default Cats
