import React from 'react';

var ListItem = (props) => (
  <div>
    {props.item.name} : {props.item.quantity}
  </div>

);

export default ListItem;