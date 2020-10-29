import React from 'react';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: '',
      newQuantity: 0
    }
    this.getGroceryList = this.getGroceryList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleInputChange(e){
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Should submit something now');
    // send a post request to the server
    axios({
      method: 'post',
      url: '/groceries',
      data: {
        name: this.state.newItem,
        quantity: this.state.newQuantity
      }
    })
      .then( (data) => { this.getGroceryList()} )
      .catch( (err) => console.log('Something went wrong: ', err))
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} handleInputChange ={this.handleInputChange} />
        <List list={this.state.list} getGroceryList={this.getGroceryList}/>
      </div>
    );
  }
}

export default App;