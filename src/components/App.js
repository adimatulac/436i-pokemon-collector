import React from 'react';
import List from './List';
// import AddItem from './AddItem';

class App extends React.Component {
  render() {
    return (
    <div className="App container">
      {/* <AddItem /> */}
      <List />
    </div>
  );
  }
}

export default App;