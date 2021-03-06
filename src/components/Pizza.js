import React from "react"

const Pizza = (props) => {

  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? 'Veggie' : 'Got Meats'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={()=> props.handleEditClick(props.pizza)}>
          EDIT
        </button>
      </td>
    </tr>
  )
}


export default Pizza
