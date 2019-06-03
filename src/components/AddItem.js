import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions'

const AddItem = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addItem(input.value))
                input.value = '';
            }}>
            <input ref={node => input = node} />
            <button type="submit">
                Add
            </button>
            </form>
        </div>
    )
}

export default connect()(AddItem);

// handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       details: this.state.details,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: '',
//       details: ''
//     }));
//   }