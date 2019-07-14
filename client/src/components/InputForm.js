import React from 'react';
import AutoCompleteInput from './AutoCompleteInput';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    state = {
        name: '',
        species: '',
        type: '',
        selected: []
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleChangeTypeahead = (e) => {
        console.log(e);
        console.log(e[0].species);
        this.setState({
            species: e[0].species
        });
        console.log(e[0].primary);
        if (e[0].secondary !== "") {
            this.setState({
                type: e[0].primary + '/' + e[0].secondary
            });
        } else {
            this.setState({
                type: e[0].primary
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.trim() && this.state.species.trim()) {
            const newPoke = {
                name: this.state.name,
                species: this.state.species,
                type: this.state.type
            };
            console.log(newPoke);
            this.props.onAddPokemon(newPoke);
            this.handleClear();
        }
    }

    handleClear = () => {
        this.setState({
            name: '',
            species: '',
            type: ''
        });
    };
    
    render() {
        return(
            <div>
                <form id="input-form" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="name"
                        className="form-control"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.name }
                        />
                    </div>
                    <AutoCompleteInput 
                        className="form-control"
                        id="species"
                        name="species"
                        onChange={ this.handleChangeTypeahead }
                        selected={ this.state.selected }
                        value={ this.state.species }
                    />
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="type"
                        className="form-control"
                        disabled
                        name="type"
                        onChange={ this.handleChange }
                        value={ this.state.type }
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary extra-space">add</button>
                        <button type="submit" className="btn btn-secondary extra-space" onClick={ this.handleClear }>clear</button>
                    </div>
                </form>    
            </div>
        );
    }
}

export default InputForm;