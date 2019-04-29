import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      pizza: {}
    }
  }
  handleEditClick = (pizza) => {
    this.setState({pizza: pizza})
  }

  handleUpdatePizza = (pizza) => {
    console.log('whatup', pizza)
    // let url = ("http://localhost:3000/pizzas/" + {pizza.id})
    // let config = {
    //   method: 'PATCH',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(pizza)
    // }
    // fetch(url, config)
    //   .then(response => response.json())
    //   .then(data => {console.log(data)})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza} submitPizzaForm={this.submitPizzaForm}/>
        <PizzaList handleEditClick={this.handleEditClick}/>
      </Fragment>
    );
  }
}

export default App;
