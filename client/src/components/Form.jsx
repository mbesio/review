import React from 'react';

var Form = (props) => (
  <div>
    <h3>Add item to the list</h3>
    <form onSubmit={(e) => {props.handleSubmit(e)}}>
      <label>
        Item:
        <input
          name="newItem"
          type="text"
          onChange={(e) => {props.handleInputChange(e)}} />
      </label>

      <label>
        Amount:
        <input
          name="newQuantity"
          type="number"
          onChange={(e) => {props.handleInputChange(e)}} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Form;