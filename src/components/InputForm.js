import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { bindActionCreators } from 'redux';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
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
            <div className="mini-form container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="title">
                        * name:
                    </label>
                    <input type="text" className="form-control" id="title" ref="title" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="details">
                        * type:
                    </label>
                    <input type="text" className="form-control" id="details" ref="details" />
                    </div>
                    <button type="submit" className="btn btn-primary extra-space fix-padding">add</button>
                    <button className="btn btn-primary extra-space fix-padding" onClick={this.handleClear}>clear form</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addItem}, dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(InputForm);