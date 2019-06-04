import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class ItemList extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>type</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.items.map(item => <Item key={item.id} {...item} />)}
                </tbody>
            </table>
        );
    }
}

// maps current state to store properties
function mapStateToProps(state) {
    return {
        items: state.items
    };
}

// passes mapped state on (binds to class)
export default connect(mapStateToProps)(ItemList);