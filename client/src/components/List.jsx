import React from 'react';
import ListItem from './ListItem.jsx'
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGroceryList();
  }

  render() {
    return (
    <div>
      <h3>Grocery List</h3>
      {this.props.list.map( (item) => {
        return <ListItem item={item} handleClick={this.props.handleClick} handleUpdate={this.props.handleUpdate} handleInputChange={this.props.handleInputChange}/>
        })
      }
    </div>
  );
 }
}


export default List;