import React from 'react';
import ListItem from './ListItem.jsx'
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getGroceryList();
  }

  // axios request to go and fetch all of what is in the database currently
  getGroceryList() {
    axios({
      method: 'get',
      url: '/groceries'
    })
      .then((data) => {
        for (var item of data.data) {
          this.setState({
            list: data.data
          })
        }
      })
      .catch((err) => console.log('There was an error: ', err));
  }

  render() {
    return (
    <div>
      <h3>Grocery List</h3>
      {this.state.list.map( (item) => {
        return <ListItem item={item}/>
        })
      }
    </div>
  );
 }
}


export default List;