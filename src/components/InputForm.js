import React from 'react';
// import Select from 'react-select';
// import { connect } from 'react-redux';
// import { addItem } from '../actions';
// import { bindActionCreators } from 'redux';

// const speciesOptions = [];
// const typeOptions = [];

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
        type: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.trim() && this.state.species.trim()) {
            console.log(this.state);
            this.props.onAddPokemon(this.state);
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
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="species"
                        className="form-control"
                        name="species"
                        onChange={ this.handleChange }
                        value={ this.state.species }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="type"
                        className="form-control"
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