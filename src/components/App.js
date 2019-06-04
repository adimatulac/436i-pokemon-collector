import React from 'react';
import Header from './Header';
import InputForm from './InputForm';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <Header />
      <InputForm />
      <ItemList />
    </div>
  );
  }
}

export default App;