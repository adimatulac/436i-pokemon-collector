import React from 'react';
import Header from './Header';
import AddPokemon from '../containers/AddPokemon';
import PokemonList from '../containers/PokemonList';
// import InputForm from './InputForm';

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col" align="center">
          <div className="col-shrink">
            <AddPokemon />
          </div>
        </div>
      </div>
      <div>
        <PokemonList />
      </div>
    </div>
  );
  }
}

export default App;