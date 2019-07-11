import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import pokemonData from './pokemonData';

class AutoCompleteInput extends React.Component {

  state = {
    selected: []
  }

      render() {
        return (
          <div className="form-group">
            <Typeahead
              onChange={this.props.onChange}
              id={this.props.id}
              name={this.props.name}
              selected={this.props.selected}
              labelKey="species"
              options={pokemonData}
              placeholder="choose a species"
            />
          </div>
        );
      }
}

export default AutoCompleteInput;