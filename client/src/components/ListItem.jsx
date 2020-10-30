import React from 'react';

var ListItem = (props) => (

  <div onClick={()=> props.handleClick(props.item.id)}>
    {props.item.name} : {props.item.quantity}
  </div>

);

export default ListItem;