import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class ItemList extends React.Component {
    render() {
        return(
            <div className="container mini-table">
            <table className="table table-borderless table-hover">
                <thead>
                    <tr>
                    <th>
                        <h5>name</h5>
                    </th>
                    <th>
                        <h5>species</h5>
                    </th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.props.items.map(item => <Item key={item.id} {...item} />)}
                </tbody>
            </table>
            </div>
        );
    }
}

// maps current state to store properties
function mapStateToProps(state) {
    return {
        items: state.items
    };
}

// passes mapped state on as props to component
export default connect(mapStateToProps)(ItemList);