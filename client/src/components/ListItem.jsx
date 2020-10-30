import React from 'react';

var ListItem = (props) => (
  <div>
    <div onClick={()=> props.handleClick(props.item._id)}>
      {props.item.name} : {props.item.quantity}
    </div>
    <form onSubmit={(e) => {props.handleUpdate(e, props.item._id )}}>
      <label>
        ^ update quantity:
        <input
        type="number"
        name="updateQuantity"
        onChange={(e) => {props.handleInputChange(e)}} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>

);

export default ListItem;