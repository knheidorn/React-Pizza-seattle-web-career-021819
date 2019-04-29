import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(data => {this.setState({pizzas: data})})
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pizzas.map((pizza, index) => {
              return <Pizza key={index} pizza={pizza} handleEditClick={this.props.handleEditClick}/>
            })
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
