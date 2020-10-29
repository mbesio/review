import React from 'react';
import Form from './components/Form.jsx'
import List from './components/List.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form/>
        <List/>
      </div>
    );
  }
}

export default App;