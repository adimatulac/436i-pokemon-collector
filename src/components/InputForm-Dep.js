import React from 'react';
// import { connect } from 'react-redux';
// import { addItem } from '../actions';
// import { bindActionCreators } from 'redux';

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

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!this.refs.title.value.trim() || !this.refs.details.value.trim()) {
    //         return;
    //     }
    //     let newItem = {
    //         id: Date.now(),
    //         title: this.refs.title.value,
    //         details: this.refs.details.value
    //     }
    //     this.props.addItem(newItem);
    //     this.refs.title.value = '';
    //     this.refs.details.value = '';
    // }

    handleClear = (e) => {
        this.setState({
            name: '',
            species: '',
            type: ''
        });
    };
    
    render() {
        return(
            <div className="mini-form container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">
                        <h5>
                        * name:
                        </h5>
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    ref="name" 
                    onChange={ this.handleChange }
                    name="name"
                    value={ this.state.name } 
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="species">
                        <h5>
                        * species:
                        </h5>
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="species" 
                    ref="species" 
                    onChange={ this.handleChange }
                    name="species"
                    value={ this.state.species } 
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="type">
                        <h5>
                        * type:
                        </h5>
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="type" 
                    ref="type" 
                    onChange={ this.handleChange }
                    name="type"
                    value={ this.state.type } 
                    />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary extra-space fix-padding">add pokemon</button>
                        <button className="btn btn-secondary extra-space fix-padding" onClick={this.handleClear}>clear form</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputForm;

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addItem}, dispatch);
// }

// export default connect(() => {return {}}, mapDispatchToProps)(InputForm);