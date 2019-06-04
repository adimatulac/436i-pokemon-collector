import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { bindActionCreators } from 'redux';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.refs.title.value.trim() || !this.refs.details.value.trim()) {
            return;
        }
        let newItem = {
            id: Date.now(),
            title: this.refs.title.value,
            details: this.refs.details.value
        }
        this.props.addItem(newItem);
        this.refs.title.value = '';
        this.refs.details.value = '';
    }

    handleClear = (e) => {
        e.preventDefault();
        this.refs.title.value = '';
        this.refs.details.value = '';
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">
                        name
                    </label>
                    <input type="text" id="title" ref="title" />
                    <label htmlFor="details">
                        type
                    </label>
                    <input id="details" ref="details" />
                </form>
                <button onClick={this.handleSubmit}>add</button>
                <button onClick={this.handleClear}>clear form</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addItem}, dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(InputForm);